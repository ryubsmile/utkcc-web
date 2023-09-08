/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      padding: {
        'safe-top': 'calc(env(safe-area-inset-top, 15px) - 15px)',
        'safe-bottom': 'env(safe-area-inset-bottom, 0px)',
        'safe-left': 'env(safe-area-inset-left, 0px)',
        'safe-right': 'env(safe-area-inset-right, 0px)',
      },
      fontFamily: {
        mainfont: ['var(--font-main)'],
      },
      colors: {
        'kcc-theme': 'var(--main-theme-color)',
        'kcc-theme-darker': 'var(--main-theme-color-darker)',
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
        '3-auto-rows': '15vh minmax(0, max-content) minmax(0, 1fr)',
      },
    },
  },
  plugins: [],
};
