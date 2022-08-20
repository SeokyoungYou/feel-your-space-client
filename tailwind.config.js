/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      myNavy: "#2D4263",
      myLightNavy: "#5F7BA1",
      myGray: "#F5F4F4",
      myRed: "#C84B31",
      myBlack: "#191919",
    },
    extend: {
      fontSize: {
        "8.5xl": "7rem",
      },
      fontFamily: {
        sans: ["Philosopher", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
