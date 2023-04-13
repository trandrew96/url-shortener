/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#000",
      white: "#fff",
      cyan: "hsl(180, 66%, 49%)",
      gray: "hsl(0, 0%, 75%)",
      grayishviolet: "hsl(257, 7%, 63%)",
      verydarkblue: "hsl(255, 11%, 22%)",
      darkviolet: "hsl(257, 27%, 26%)",
      red: "hsl(0, 87%, 67%)",
      blueishgray: "#f0f1f6",
    },
    extend: {
      backgroundImage: {
        working: "url('/src/img/illustration-working.svg')",
      },
    },
  },
  plugins: [],
};
