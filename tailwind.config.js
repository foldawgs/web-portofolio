/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // <--- ini penting!
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Next.js folder
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
