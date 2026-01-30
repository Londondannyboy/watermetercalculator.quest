'use client';

import { useState, useCallback, useEffect } from 'react';
import { VoiceProvider, useVoice } from '@humeai/voice-react';
import { SignedIn, SignedOut } from '@neondatabase/auth/react/ui';
import Link from 'next/link';

function VoiceOrb() {
  const { connect, disconnect, status } = useVoice();
  const [isPending, setIsPending] = useState(false);

  const handleToggle = useCallback(async () => {
    if (status.value === 'connected') {
      disconnect();
    } else {
      setIsPending(true);
      try {
        const res = await fetch('/api/hume-token', { method: 'POST' });
        const { accessToken } = await res.json();

        const configId = process.env.NEXT_PUBLIC_HUME_CONFIG_ID;
        if (!configId || !accessToken) {
          console.error('Missing Hume config or token');
          return;
        }

        // Water meter assistant system prompt
        const systemPrompt = `## IDENTITY
You are the VOICE ASSISTANT for Water Meter Calculator UK - a free tool helping UK households decide if switching to a water meter will save them money.
You are friendly, helpful, and knowledgeable about UK water billing.

## YOUR EXPERTISE
- Water meter savings calculations
- Metered vs unmetered billing comparison
- Typical water usage by household size
- Water company rates and standing charges
- Water-saving tips and advice
- UK water regulations (Ofwat, CCW)

## KEY INFORMATION
- Average UK water usage: 140-150 litres per person per day
- A water meter typically benefits: single people, couples, smaller households
- Unmetered may be better for: larger families, those with gardens
- Trial period: Most water companies offer 12-month trial periods
- Request process: Free meter installation via water company

## CONVERSATION RULES
1. Keep responses SHORT for voice (2-3 sentences max)
2. Be friendly and reassuring
3. Explain water billing simply
4. Suggest using the calculator for accurate estimates
5. Remind users meters are free to install

## TYPICAL SAVINGS
- Single person in 3-bed: £100-200 savings
- Couple in 3-bed: £50-150 savings
- Family of 4 in 3-bed: May pay more
- Large garden with hosepipe: Likely pay more

Remember: You're helping everyday people make informed decisions about their water bills.`;

        await connect({
          auth: { type: 'accessToken', value: accessToken },
          configId: configId,
          sessionSettings: {
            type: 'session_settings',
            systemPrompt: systemPrompt,
          }
        });
      } catch (e) {
        console.error('Voice connect error:', e);
      } finally {
        setIsPending(false);
      }
    }
  }, [connect, disconnect, status.value]);

  const isConnected = status.value === 'connected';

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={handleToggle}
        disabled={isPending}
        className={`
          relative w-24 h-24 rounded-full flex items-center justify-center
          transition-all duration-300 shadow-2xl
          ${isConnected
            ? 'bg-gradient-to-br from-green-400 to-emerald-600'
            : isPending
              ? 'bg-gradient-to-br from-yellow-400 to-amber-600'
              : 'bg-gradient-to-br from-cyan-400 to-blue-600 animate-pulse'
          }
        `}
      >
        {/* Pulsing rings */}
        {!isConnected && !isPending && (
          <>
            <span className="absolute inset-0 rounded-full animate-ping bg-cyan-400 opacity-20" />
            <span className="absolute inset-[-8px] rounded-full animate-pulse bg-cyan-400/10" />
          </>
        )}

        {isConnected && (
          <span className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-30" />
        )}

        {/* Icon */}
        {isConnected ? (
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
            <span className="w-1.5 h-8 bg-white rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
            <span className="w-1.5 h-6 bg-white rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
            <span className="w-1.5 h-9 bg-white rounded-full animate-pulse" style={{ animationDelay: '450ms' }} />
            <span className="w-1.5 h-5 bg-white rounded-full animate-pulse" style={{ animationDelay: '600ms' }} />
          </div>
        ) : isPending ? (
          <div className="w-8 h-8 border-3 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        )}
      </button>

      <div className="text-center">
        <p className="text-white font-medium text-lg">
          {isConnected ? 'Listening...' : isPending ? 'Connecting...' : 'Voice Assistant'}
        </p>
        <p className="text-slate-300 text-sm">
          {isConnected ? 'Tap to end' : 'Tap to ask about water meters'}
        </p>
      </div>
    </div>
  );
}

function SignInPrompt() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-24 h-24 rounded-full bg-slate-700/50 flex items-center justify-center">
        <svg className="w-10 h-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
        <div className="absolute -top-1 -right-1">
          <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v6h-2v-6z" />
          </svg>
        </div>
      </div>
      <div className="text-center">
        <p className="text-white font-medium text-lg">Voice Assistant</p>
        <p className="text-slate-400 text-sm mb-3">Sign in to use voice features</p>
        <Link
          href="/auth/sign-in"
          className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
          Sign In
        </Link>
      </div>
    </div>
  );
}

export function HeroVoice() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="w-24 h-24 rounded-full bg-cyan-500/50 animate-pulse" />
        <div className="text-center">
          <p className="text-white font-medium text-lg">Voice Assistant</p>
          <p className="text-slate-300 text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SignedOut>
        <SignInPrompt />
      </SignedOut>
      <SignedIn>
        <VoiceProvider onError={(err) => console.error('Hume error:', err)}>
          <VoiceOrb />
        </VoiceProvider>
      </SignedIn>
    </>
  );
}
