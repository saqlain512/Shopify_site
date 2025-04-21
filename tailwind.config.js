/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',  // full width on small screens
          md: '100%',
          lg: '1140px', // custom max-widths
          xl: '1300px',
          '2xl': '1440px',
        },
      },
    },
  },
  plugins: [],
}