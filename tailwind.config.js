/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        'custom': '2.5rem',
      },
      lineHeight: {
        'custom': '1.75rem',
      },
    },
  },
  plugins: [],
};
