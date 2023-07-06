/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mainfont: ['var(--font-main)'],
      },
      colors: {
        'kcc-theme': 'var(--main-theme-color)',
      },
    },
  },
  plugins: [],
};
