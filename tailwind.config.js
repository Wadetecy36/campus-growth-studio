/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0A0A',
          900: '#0E0E0F',
          800: '#141416',
          700: '#1C1C1F',
          600: '#2A2A2E',
        },
        paper: {
          DEFAULT: '#F0EEE9',
          light: '#F8F7F4',
          muted: '#E5E1DA',
          border: 'rgba(10, 10, 10, 0.12)',
        },
        studio: {
          primary: '#111111',
          muted: '#77736D',
          subtle: '#9A958E',
          accent: '#FF4D2E', // Subtle high-voltage warm vermilion used minimally
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Instrument Serif"', '"Newsreader"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        widest: '0.18em',
        ultra: '0.25em',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        'elevated': '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
        'dock': '0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
}
