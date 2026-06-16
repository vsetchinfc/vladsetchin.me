import type { IconName } from './icons';

export interface SkillGroup {
  category: string;
  icon: IconName;
  items: string[];
}

export const SKILLS: SkillGroup[] = [
  {
    category: 'Backend',
    icon: 'terminal',
    items: ['.NET / C#', 'ASP.NET Web API', 'Node.js', 'REST APIs', 'Microservices', 'CQRS / DDD'],
  },
  {
    category: 'AI & Agents',
    icon: 'cpu',
    items: ['Claude API (Anthropic)', 'GitHub Copilot', 'MCP', 'Multi-agent Systems', 'Prompt Engineering', 'Agentic Workflows'],
  },
  {
    category: 'Frontend',
    icon: 'code',
    items: ['Angular', 'NgRx', 'React', 'Vue.js', 'TypeScript', 'HTML5 / CSS3'],
  },
  {
    category: 'Database',
    icon: 'database',
    items: ['SQL Server / T-SQL', 'PostgreSQL', 'MySQL', 'Oracle', 'CosmosDB', 'Entity Framework Core'],
  },
  {
    category: 'Cloud & DevOps',
    icon: 'cloud',
    items: ['Azure', 'Azure DevOps', 'GitHub Actions', 'Docker', 'CI/CD Pipelines', 'Linux'],
  },
  {
    category: 'Practices',
    icon: 'gear',
    items: ['Architecture & ADRs', 'TDD', 'Event-Driven Architecture', 'Code Review', 'Technical Leadership', 'Agile / Scrum'],
  },
];
