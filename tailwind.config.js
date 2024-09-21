/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        Humanist: ["Humanist", "sans-serif"],
      },
      colors: {
        BackgroundColor: "#2C320D",
        SecondColor: "#929A68",
        titleColor: "#A9AF8B",
        textColor: "#929A68",
      },
    },
  },
  plugins: [],
};
