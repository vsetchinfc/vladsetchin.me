export interface Service {
  title: string;
  description: string;
  bullets: string[];
}

export const SERVICES: Service[] = [
  {
    title: 'AI Agent Development',
    description:
      'Design and build production AI agent systems — from single-agent tools to multi-agent delivery pipelines with memory, handoff contracts, and failure-mode handling.',
    bullets: [
      'Multi-agent system design and architecture',
      'Claude API / Anthropic SDK integration',
      'MCP server development',
      'Agent memory and state management',
    ],
  },
  {
    title: 'Software Engineering',
    description:
      '.NET/C# and Azure backend engineering, API design, and full-stack delivery across Angular, React, and TypeScript. From architecture to production.',
    bullets: [
      'Azure cloud architecture and integration',
      'API design, integration, and migration',
      'Frontend development (Angular, React, TypeScript)',
      'Code review and technical leadership',
    ],
  },
  {
    title: 'Technical Consulting',
    description:
      'Independent guidance on technology choices, AI strategy, and engineering practices. Particularly useful for teams evaluating LLM/agent adoption.',
    bullets: [
      'AI readiness and stack evaluation',
      'Architecture audits and ADR documentation',
      'Engineering process and delivery improvement',
      'Team structure and hiring guidance',
    ],
  },
];
