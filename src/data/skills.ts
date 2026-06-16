export interface SkillGroup {
  category: string;
  items: string[];
}

export const SKILLS: SkillGroup[] = [
  {
    category: 'Backend',
    items: ['.NET / C#', 'ASP.NET Web API', 'Node.js', 'REST APIs', 'Microservices', 'CQRS / DDD'],
  },
  {
    category: 'AI & Agents',
    items: ['Claude API (Anthropic)', 'GitHub Copilot', 'MCP', 'Multi-agent Systems', 'Prompt Engineering', 'Agentic Workflows'],
  },
  {
    category: 'Frontend',
    items: ['Angular', 'NgRx', 'React', 'Vue.js', 'TypeScript', 'HTML5 / CSS3'],
  },
  {
    category: 'Database',
    items: ['SQL Server / T-SQL', 'PostgreSQL', 'MySQL', 'Oracle', 'CosmosDB', 'Entity Framework Core'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['Azure', 'Azure DevOps', 'GitHub Actions', 'Docker', 'CI/CD Pipelines', 'Linux'],
  },
  {
    category: 'Practices',
    items: ['Architecture & ADRs', 'TDD', 'Event-Driven Architecture', 'Code Review', 'Technical Leadership', 'Agile / Scrum'],
  },
];
