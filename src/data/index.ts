import type { Project, SkillGroup, Achievement, NavLink } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const TYPING_PHRASES: string[] = [
  'javac HelloWorld.java',
  'mvn spring-boot:run',
  'git push origin main',
  'docker-compose up',
  'Open to work →',
]

export const PROJECTS: Project[] = [
  {
    id: 'url-shortener',
    num: '01',
    name: 'URL Shortener',
    category: 'backend',
    featured: true,
    description:
      'Full-stack link compression system — generates cryptographically unique short codes, handles redirects, and stores URL mappings via clean Spring Boot REST endpoints.',
    stack: ['Java', 'Spring Boot', 'REST APIs', 'HTML', 'CSS'],
    demo: 'https://url-shortner-full.vercel.app',
    github: 'https://github.com/Mishra559',
  },
  {
    id: 'gitlytics',
    num: '02',
    name: 'Gitlytics Buddy',
    category: 'fullstack',
    featured: true,
    description:
      'GitHub analytics dashboard surfacing commit frequency, contributor rankings, and repository health insights by consuming the GitHub REST API with live data fetching.',
    stack: ['JavaScript', 'GitHub API', 'REST APIs', 'HTML', 'CSS'],
    demo: 'https://gitlytics-buddy.netlify.app',
    github: 'https://github.com/Mishra559',
  },
  {
    id: 'avhisafe',
    num: '03',
    name: 'AvhiSafe Wallet',
    category: 'backend',
    description:
      'Web3 wallet key generator implementing cryptographic asymmetric key creation — explores blockchain fundamentals, wallet address derivation, and security-first design.',
    stack: ['JavaScript', 'Web3', 'Cryptography', 'HTML', 'CSS'],
    demo: null,
    github: 'https://github.com/Mishra559',
  },
]

export const SKILLS: SkillGroup[] = [
  {
    icon: '☕',
    label: 'Languages',
    span: 2,
    tags: [
      { name: 'Java', variant: 'core' },
      { name: 'SQL', variant: 'core' },
      { name: 'JavaScript', variant: 'blue' },
    ],
  },
  {
    icon: '⚡',
    label: 'Backend',
    span: 3,
    tags: [
      { name: 'Spring Boot', variant: 'core' },
      { name: 'Spring Core', variant: 'core' },
      { name: 'JDBC', variant: 'default' },
      { name: 'REST APIs', variant: 'default' },
      { name: 'JUnit', variant: 'blue' },
      { name: 'Mockito', variant: 'blue' },
    ],
  },
  {
    icon: '📦',
    label: 'Build Tools',
    span: 2,
    tags: [
      { name: 'Maven', variant: 'default' },
      { name: 'Gradle', variant: 'default' },
    ],
  },
  {
    icon: '🎨',
    label: 'Frontend',
    span: 2,
    tags: [
      { name: 'React', variant: 'blue' },
      { name: 'HTML', variant: 'default' },
      { name: 'CSS', variant: 'default' },
      { name: 'JavaScript', variant: 'blue' },
    ],
  },
  {
    icon: '🐳',
    label: 'DevOps & Cloud',
    span: 3,
    tags: [
      { name: 'Docker', variant: 'default' },
      { name: 'Kubernetes', variant: 'default' },
      { name: 'Jenkins', variant: 'default' },
      { name: 'AWS EC2', variant: 'blue' },
      { name: 'Linux', variant: 'default' },
    ],
  },
  {
    icon: '🗄️',
    label: 'Databases',
    span: 2,
    tags: [
      { name: 'MySQL', variant: 'core' },
      { name: 'Oracle', variant: 'default' },
    ],
  },
  {
    icon: '🔧',
    label: 'Tools',
    span: 2,
    tags: [
      { name: 'Git', variant: 'core' },
      { name: 'GitHub', variant: 'default' },
      { name: 'Bitbucket', variant: 'default' },
      { name: 'JIRA', variant: 'blue' },
      { name: 'IntelliJ', variant: 'default' },
      { name: 'VS Code', variant: 'default' },
    ],
  },
]

export const ACHIEVEMENTS: Achievement[] = [
  {
    icon: '⚡',
    title: '5-Star Java',
    subtitle: 'HackerRank · Problem Solving',
    decoration: '★★★★★',
  },
  {
    icon: '🗄️',
    title: '5-Star SQL',
    subtitle: 'HackerRank · Database Queries',
    decoration: '★★★★★',
  },
  {
    icon: '🚀',
    title: '3 Live Deployments',
    subtitle: 'Vercel · Netlify · Production',
    decoration: '● ● ●',
    decorationColor: 'text-cyan-400',
  },
  {
    icon: '🔗',
    title: 'Web3 Builder',
    subtitle: 'Cryptographic Key Generation',
    decoration: 'Blockchain · Security',
    decorationColor: 'text-pink-500',
  },
]

export const MARQUEE_ITEMS = [
  { text: 'Java', accent: false },
  { text: 'Spring Boot', accent: true },
  { text: 'REST APIs', accent: false },
  { text: 'SQL', accent: 'cyan' },
  { text: 'Docker', accent: false },
  { text: 'React', accent: true },
  { text: 'AWS', accent: false },
  { text: 'Git', accent: 'cyan' },
  { text: 'Open to Work', accent: false },
] as const

export const LANG_COLORS: Record<string, string> = {
  Java: 'linear-gradient(90deg, #c8ff00, #88cc00)',
  JavaScript: 'linear-gradient(90deg, #00e5ff, #0099cc)',
  TypeScript: 'linear-gradient(90deg, #5b8dee, #3366cc)',
  HTML: 'linear-gradient(90deg, #ff6b35, #cc4400)',
  CSS: 'linear-gradient(90deg, #aa88ff, #6644cc)',
  Python: 'linear-gradient(90deg, #ffd700, #cc9900)',
  SQL: 'linear-gradient(90deg, #ff2d78, #cc0044)',
  Shell: 'linear-gradient(90deg, #66ff99, #00aa44)',
}
