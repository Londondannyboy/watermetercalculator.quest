'use client';

import { CopilotKit } from '@copilotkit/react-core';
import { CopilotSidebar } from '@copilotkit/react-ui';
import '@copilotkit/react-ui/styles.css';

function getInitialMessage(): string {
  return `Hi! I'm your Water Meter assistant. I can help you with:

• **Water meter savings** - calculate if a meter is right for you
• **Usage estimates** - typical water consumption by activity
• **Bill comparisons** - metered vs unmetered costs
• **Water company info** - rates and standing charges

What would you like help with?`;
}

export default function AssistantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
