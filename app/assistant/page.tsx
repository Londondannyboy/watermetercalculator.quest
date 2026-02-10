import { Metadata } from 'next';
import Link from 'next/link';
import { HeroVoice } from '@/components/HeroVoice';

export const metadata: Metadata = {
  title: 'Voice Assistant | Water Meter Calculator UK',
  description: 'Talk to our AI voice assistant about water meters, bills, and savings. Get instant answers about UK water billing.',
  alternates: {
    canonical: 'https://watermetercalculator.quest/assistant',
  },
};

export default function AssistantPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Calculator
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            AI-Powered Voice Assistant
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Water Meter{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Voice Assistant
            </span>
          </h1>

          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            Ask questions about <strong>water meters</strong>, billing, and savings.
            Our AI assistant provides instant answers about <strong>UK water</strong> costs.
          </p>
        </div>

        {/* Voice Assistant */}
        <div className="mb-12">
          <HeroVoice />
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 text-left">
            <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-1">Ask Anything</h3>
            <p className="text-slate-400 text-sm">Get instant answers about water meters, bills, and savings for UK households.</p>
          </div>

          <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 text-left">
            <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-1">Personalized Advice</h3>
            <p className="text-slate-400 text-sm">Get recommendations based on your household size and water usage patterns.</p>
          </div>
        </div>

        {/* Example Questions */}
        <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20 text-left">
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">Example Questions</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-0.5">•</span>
              &quot;Will a water meter save me money?&quot;
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-0.5">•</span>
              &quot;How much water does a shower use?&quot;
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-0.5">•</span>
              &quot;What&apos;s the average water bill in the UK?&quot;
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-0.5">•</span>
              &quot;How do I request a water meter?&quot;
            </li>
          </ul>
        </div>

        {/* CTA to Calculator */}
        <div className="mt-12">
          <p className="text-slate-400 mb-4">
            Want detailed calculations? Use our free calculator.
          </p>
          <Link
            href="/#calculator"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-xl transition-colors"
          >
            Use Water Meter Calculator
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
