export interface ExperienceEntry {
  company: string;
  title: string;
  period: string;
  summary: string;
  highlights: string[];
  tech: string[];
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: 'Ascora',
    title: 'Senior Full Stack Software Engineer',
    period: 'Jul 2025 – May 2026',
    summary:
      'Maintained and enhanced a 150+ project enterprise field service management platform, including a multi-accounting integration hub spanning Xero, MYOB, QuickBooks, and Deputy.',
    highlights: [
      'Built OAuth-based adapters and data transformation layers integrating Xero, MYOB, QuickBooks Online, and Deputy Payroll',
      'Integrated third-party SaaS platforms: Zoom, Stripe, EWay, Dropbox, ServiceM8, WorkflowMax',
      'Applied adapter/factory patterns to extend integration capability across multiple accounting providers behind a unified interface',
    ],
    tech: ['ASP.NET MVC', '.NET Framework', 'SQL Server', 'Azure App Services', 'OAuth2'],
  },
  {
    company: 'QuantumIT',
    title: 'Senior Full Stack Software Engineer',
    period: 'Mar 2023 – Jun 2025',
    summary:
      'IT consulting across multitenant microservices and a legacy monolith. Owned the internal Contract Management project as sole Angular developer; mentored junior developers.',
    highlights: [
      'Maintained 96%+ code coverage on production systems through code review and disciplined unit/integration testing',
      'Established onboarding processes and development environment setup procedures',
      'Led remote and hybrid teams while maintaining performance and quality standards',
    ],
    tech: ['CQRS', 'DDD', 'Angular', '.NET Core', 'Azure', 'Entity Framework Core'],
  },
  {
    company: 'Summatix',
    title: 'Full Stack Developer',
    period: 'Sep 2019 – 2023',
    summary:
      'Implemented a scalable, modular, event-driven system on CQRS and SOLID principles. Transitioned the team to a high-performing hybrid remote model.',
    highlights: [
      'Achieved Microsoft Certified: Azure Developer Associate',
      'Contributed to software architecture design, scoping, and delivery estimation',
      'Expanded Jira/NUnit test report integration for the QA team',
    ],
    tech: ['CQRS', 'Event-Driven Architecture', 'Angular', 'GraphQL', 'CosmosDB', 'Azure DevOps'],
  },
  {
    company: 'Noble Systems',
    title: 'Senior Full-Stack Software Engineer',
    period: 'Jul 2010 – Sep 2019',
    summary:
      'Nine years building call-centre workforce management tooling — forecasting, campaign management, and legacy modernisation.',
    highlights: [
      'Built Outbound Forecast and Campaign Management modules from spec through implementation',
      'Converted legacy VB6 modules to .NET C# 4.5',
      'Introduced SCRUM and set up TFS automated build/integration for the team',
      'Supervised and mentored new developers and an outsourced remote team',
    ],
    tech: ['.NET', 'Angular', 'Vue.js', 'ASP.NET MVC', 'WinForms', 'TFS'],
  },
  {
    company: 'Pen Computer Systems',
    title: 'Senior Software Engineer',
    period: 'Jun 2007 – Jul 2010',
    summary:
      'Healthcare systems integration — HL7 messaging, licensing infrastructure, and CI tooling for a clinical software suite.',
    highlights: [
      'Implemented Medical Director integrations using WCF, MSMQ, and HL7 V3 XML messaging',
      'Built a full licensing system spanning Windows Sidebar plug-ins, ASP.NET, and SQL Server',
      'Set up CruiseControl.NET with NUnit/NCover for continuous integration and coverage reporting',
    ],
    tech: ['.NET WCF', 'HL7', 'ASP.NET', 'SQL Server', 'VMWare', 'CruiseControl.NET'],
  },
  {
    company: 'Hansen Technologies',
    title: 'Software Developer',
    period: 'Dec 2005 – Jun 2007',
    summary: 'Billing systems support and automation for a multi-client unified billing platform.',
    highlights: [
      'Rewrote the Gas and Electricity Message Broker systems, saving $15,000/month in third-party support costs',
      'Automated regression testing for the HUB Unified Billing System using TestComplete',
      'Built WinForms tooling for historical data generation and environment management',
    ],
    tech: ['.NET 2.0', 'WinForms', 'Oracle', 'TestComplete', 'ClearCase'],
  },
  {
    company: 'RMCS — Retail Management Computer Systems',
    title: 'Software Developer',
    period: 'Mar 2000 – Dec 2005',
    summary:
      'Early career across client-server application development, relational database design, and systems administration.',
    highlights: [
      'Designed and implemented client-server applications in C, C++, .NET, VB.NET, and PHP',
      'Architected SQL Server 2000 replication across a 150+ computer network',
      'Adopted TDD and OO design patterns ahead of broader industry practice',
      'Acted as technical team lead and mentor for junior programmers',
    ],
    tech: ['C / C++', 'SQL Server', 'PostgreSQL', 'Oracle', 'ODBC', 'Linux'],
  },
];
