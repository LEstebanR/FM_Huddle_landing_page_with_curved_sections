/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "top-mobile": "url('./images/bg-section-top-mobile-1.svg')",
      },
      colors: {
        primary: "#FF52C1",
        active: "hsl(321, 100%, 78%)",
        gray: "#808E9A",
      },
    },
    fontFamily: {
      Headers: ['"Poppins"', "sans-serif"],
      Body: ['"Open Sans"', "sans-serif"],
    },
    boxShadow: {
      buttonOutline: " 0px 0px 5px 0px rgba(255, 82, 193, 0.22);",
    },
  },
  plugins: [],
};
