// TODO: owner copy — update services to match your actual offerings
export interface Service {
  title: string;
  description: string;
  bullets: string[];
}

export const SERVICES: Service[] = [
  {
    title: 'Software Engineering', // TODO: owner copy
    description:
      'Full-stack web application development with Angular, Vue, React, and .NET. From architecture to production.',
    bullets: [
      'Custom web application development',
      'Frontend architecture and design systems',
      'API design, integration, and migration',
      'Code review and technical leadership',
    ],
  },
  {
    title: 'Technical Consulting',
    description:
      'Independent guidance on technology choices, engineering practices, and delivery process improvement.',
    bullets: [
      'Technology stack evaluation and selection',
      'Code quality and architecture audits',
      'Engineering process and Agile practices',
      'Team structure and hiring guidance',
    ],
  },
  {
    title: 'Mentoring & Training',
    description:
      'One-on-one mentoring and team workshops for developers looking to grow their skills and confidence.',
    bullets: [
      'Junior and mid-level developer mentoring',
      'Angular / TypeScript deep-dives',
      'TDD and clean code practices',
      'Career guidance for software engineers',
    ],
  },
];
