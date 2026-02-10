'use client';

import { NeonAuthUIProvider } from '@neondatabase/auth/react/ui';
import { createAuthClient } from '@neondatabase/auth';
import { BetterAuthReactAdapter } from '@neondatabase/auth/react/adapters';

// Create auth client for UI provider
export const uiAuthClient = createAuthClient(process.env.NEXT_PUBLIC_NEON_AUTH_URL || '/api/auth', {
  adapter: BetterAuthReactAdapter(),
});

// Lightweight providers - no CopilotKit or heavy AI dependencies
// AI features are lazy-loaded on /assistant page only
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NeonAuthUIProvider authClient={uiAuthClient} redirectTo="/">
      {children}
    </NeonAuthUIProvider>
  );
}
