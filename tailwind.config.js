/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: ["tailwindcss", "postcss-preset-env"],
};
