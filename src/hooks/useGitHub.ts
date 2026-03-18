import { useState, useEffect } from 'react'
import type { GitHubStats, GitHubUser, GitHubRepo } from '@/types'
import { LANG_COLORS } from '@/data'

interface UseGitHubResult {
  stats: GitHubStats | null
  loading: boolean
  error: string | null
}

const GITHUB_USERNAME = 'Mishra559'

export function useGitHub(): UseGitHubResult {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    async function fetchData(): Promise<void> {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
            signal: controller.signal,
          }),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
            { signal: controller.signal }
          ),
        ])

        if (!userRes.ok || !reposRes.ok) {
          throw new Error('GitHub API rate limited or unavailable')
        }

        const user: GitHubUser = await userRes.json()
        const repos: GitHubRepo[] = await reposRes.json()

        const ownRepos = repos.filter((r) => !r.fork)
        const stars = ownRepos.reduce((acc, r) => acc + r.stargazers_count, 0)

        const langCounts: Record<string, number> = {}
        repos.forEach((r) => {
          if (r.language) {
            langCounts[r.language] = (langCounts[r.language] ?? 0) + 1
          }
        })

        // Ensure all languages have color entries (fallback handled in component)
        const knownLangs = Object.keys(LANG_COLORS)
        const sortedLangs = Object.fromEntries(
          Object.entries(langCounts)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 5)
            .map(([lang, count]) => [lang, count])
        )

        void knownLangs // suppress unused warning

        setStats({
          repos: user.public_repos,
          stars,
          followers: user.followers,
          languages: sortedLangs,
        })
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          setError(err.message)
        }
      } finally {
        setLoading(false)
      }
    }

    void fetchData()

    return () => controller.abort()
  }, [])

  return { stats, loading, error }
}
