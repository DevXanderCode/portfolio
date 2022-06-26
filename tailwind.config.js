/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      Kaushan: ["Kaushan Script"],
    },
    extend: {
      colors: {
        green: {
          DEFAULT: "#00f260",
        },
      },
    },
  },
  plugins: ["tailwindcss", "postcss-preset-env"],
};
