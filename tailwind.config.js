/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: '#EBEBEB',
        'text-secondary': '#6B6B6B',
        primary: '#462878',
        background: '#2D2A37',
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
      boxShadow: {
        custom:
          '0px 11px 7px 0px rgba(0, 0, 0, 0.01), 0px 7px 7px 0px rgba(0, 0, 0, 0.04), 0px 4px 6px 0px rgba(0, 0, 0, 0.10), 0px 2px 4px 0px rgba(0, 0, 0, 0.26), 0px 0px 2px 0px rgba(0, 0, 0, 0.29), 0px 2px 3px 0px rgba(255, 255, 255, 0.06) inset',
      },
      backgroundImage: {
        'gradient-custom':
          'linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%)',
        'gradient-hover':
          'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('max-sm', '@media (max-width: 640px)')
      addVariant('max-md', '@media (max-width: 768px)')
      addVariant('max-lg', '@media (max-width: 1024px)')
    }),
  ],
}
