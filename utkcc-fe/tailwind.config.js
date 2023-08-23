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
        'kcc-gray': 'var(--theme-gray-color)',
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xs': '0.5rem',
      },
      gridTemplateColumns: {
        'right-tilt-twin-columns': 'minmax(0, 1fr) minmax(0, 1.5fr)',
      },
      gridTemplateRows: {
        '3-auto-rows': '25vh minmax(0, max-content) minmax(0, 1fr)',
      },
    },
  },
  plugins: [],
};
