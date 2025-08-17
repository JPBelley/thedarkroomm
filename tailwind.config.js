/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/design-system/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  options: {
    safelist: [
      'grid-cols-2',
      'grid-cols-3',
      { pattern: /gap-/ },
    ],
  },
  theme: {
    extend: {
      colors: {
        'soft-black': 'var(--soft-black)',
      },
    },
  },
  plugins: [],
}