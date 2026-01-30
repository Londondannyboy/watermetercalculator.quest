'use client';

import { CopilotKit } from '@copilotkit/react-core';
import { CopilotSidebar } from '@copilotkit/react-ui';
import { NeonAuthUIProvider } from '@neondatabase/auth/react/ui';
import { createAuthClient } from '@neondatabase/auth';
import { BetterAuthReactAdapter } from '@neondatabase/auth/react/adapters';
import '@copilotkit/react-ui/styles.css';

// Create auth client for UI provider
export const uiAuthClient = createAuthClient(process.env.NEXT_PUBLIC_NEON_AUTH_URL || '/api/auth', {
  adapter: BetterAuthReactAdapter(),
});

// Get initial message
function getInitialMessage(): string {
  return `Hi! I'm your Water Meter assistant. I can help you with:

• **Water meter savings** - calculate if a meter is right for you
• **Usage estimates** - typical water consumption by activity
• **Bill comparisons** - metered vs unmetered costs
• **Water company info** - rates and standing charges

What would you like help with?`;
}

function CopilotWrapper({ children }: { children: React.ReactNode }) {
  return (
    <CopilotKit runtimeUrl="/api/copilotkit" agent="water_agent">
      <CopilotSidebar
        labels={{
          title: "Water Meter Assistant",
          initial: getInitialMessage(),
        }}
        defaultOpen={false}
        className="water-copilot-sidebar"
      >
        {children}
      </CopilotSidebar>
    </CopilotKit>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NeonAuthUIProvider authClient={uiAuthClient} redirectTo="/">
      <CopilotWrapper>{children}</CopilotWrapper>
    </NeonAuthUIProvider>
  );
}
