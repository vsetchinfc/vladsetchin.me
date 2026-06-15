// TODO: owner copy — update skills to match your actual expertise
export interface SkillGroup {
  category: string;
  items: string[];
}

export const SKILLS: SkillGroup[] = [
  {
    category: 'Frontend',
    items: ['Angular', 'Vue.js', 'React', 'TypeScript', 'HTML5 / CSS3', 'Responsive Design'],
  },
  {
    category: 'Backend',
    items: ['.NET / C#', 'Node.js', 'Python', 'REST APIs', 'SQL'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['Azure', 'GitHub Actions', 'Docker', 'CI/CD Pipelines', 'Linux'],
  },
  {
    category: 'Practices',
    items: ['Agile / Scrum', 'Test-Driven Development', 'Code Review', 'Technical Leadership', 'Mentoring'],
  },
];
