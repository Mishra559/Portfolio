import { useState, useEffect } from 'react'

interface UseTypingOptions {
  speed?: number
  deleteSpeed?: number
  pause?: number
}

export function useTyping(
  words: string[],
  { speed = 80, deleteSpeed = 40, pause = 1800 }: UseTypingOptions = {}
): string {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1))
          if (text.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), pause)
          }
        } else {
          setText(current.slice(0, text.length - 1))
          if (text.length - 1 === 0) {
            setIsDeleting(false)
            setWordIndex((i) => i + 1)
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    )

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, speed, deleteSpeed, pause])

  return text
}
