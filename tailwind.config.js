/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        Humanist: ["Humanist", "sans-serif"],
      },
      colors: {
        BackgroundColor: "#002733",
        SecondColor: "#D48319",
      },
    },
  },
  plugins: [],
};
