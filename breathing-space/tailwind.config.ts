import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e67e5a',
        secondary: '#f5f5f5',
        accent: '#2c3e50',
      },
      fontFamily: {
        sans: ['var(--font-noto-sans)'],
      },
    },
  },
  plugins: [],
}
export default config 