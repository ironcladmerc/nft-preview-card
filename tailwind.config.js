/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        softBlue: "hsl(215, 51%, 70%)",
        cyan: "hsl(178, 100%, 50%)",
        veryDarkBlueMain: "hsl(217, 54%, 11%)",
        veryDarkBlueCard: "hsl(216, 50%, 16%)",
        veryDarkBlueLine: "hsl(215, 32%, 27%)",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      fontWeight: {
        light: "300",
        regular: "400",
        semiBold: "600",
      },
    },
  },
  plugins: [],
};
