import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['"Bricolage Grotesque"', 'sans-serif'],
        mono: ['"Azeret Mono"', 'monospace'],
      },
      colors: {
        acid: '#c8ff00',
        cyan: '#00e5ff',
        pink: '#ff2d78',
        bg: {
          DEFAULT: '#050508',
          2: '#080810',
        },
        surface: {
          DEFAULT: '#0d0d18',
          2: '#12122a',
        },
      },
      animation: {
        'marquee': 'marquee 20s linear infinite',
        'scan': 'scan 4s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'glitch1': 'glitch1 3.5s infinite',
        'glitch2': 'glitch2 3.5s infinite',
        'scroll-pulse': 'scrollPulse 2s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scan: {
          '0%': { top: '-2px' },
          '100%': { top: '100vh' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glitch1: {
          '0%, 94%, 100%': { transform: 'translate(0)' },
          '95%': { transform: 'translate(-4px, 1px)' },
          '96%': { transform: 'translate(4px, -1px)' },
          '97%': { transform: 'translate(-2px, 2px)' },
        },
        glitch2: {
          '0%, 94%, 100%': { transform: 'translate(0)' },
          '95%': { transform: 'translate(4px, -1px)' },
          '96%': { transform: 'translate(-4px, 1px)' },
          '97%': { transform: 'translate(2px, -2px)' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '1', transform: 'scaleY(1)' },
          '50%': { opacity: '0.3', transform: 'scaleY(0.5)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
