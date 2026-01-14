/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'oklch(44.4% 0.011 73.639)', // #3B82F6 in RGB
        secondary: 'oklch(37.4% 0.01 67.558)', // #1E40AF
        dark: 'oklch(26.8% 0.007 34.298)', // #0F172A
        light: 'rgb(248 250 252)', // #F8FAFC
        'oklch-primary': 'oklch(55.3% 0.013 58.071)',
        'oklch-dark': 'oklch(44.4% 0.011 73.639)',
        'oklch-darker': 'oklch(37.4% 0.01 67.558)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}