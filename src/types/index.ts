export interface Project {
  id: string
  num: string
  name: string
  category: 'backend' | 'fullstack'
  description: string
  stack: string[]
  demo: string | null
  github: string
  featured?: boolean
}

export interface SkillGroup {
  icon: string
  label: string
  tags: SkillTag[]
  span?: 2 | 3
}

export interface SkillTag {
  name: string
  variant: 'core' | 'blue' | 'default'
}

export interface Achievement {
  icon: string
  title: string
  subtitle: string
  decoration: string
  decorationColor?: string
}

export interface GitHubUser {
  public_repos: number
  followers: number
  following: number
  name: string
  bio: string | null
}

export interface GitHubRepo {
  stargazers_count: number
  language: string | null
  fork: boolean
}

export interface GitHubStats {
  repos: number
  stars: number
  followers: number
  languages: Record<string, number>
}

export type FilterCategory = 'all' | 'backend' | 'fullstack'

export interface NavLink {
  label: string
  href: string
}
