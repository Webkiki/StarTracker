/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "star-movement": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "100% 100%" },
        },
        pulse: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.5)", opacity: "0.7" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },

      animation: {
        "star-move": "star-movement 50s linear infinite",
      },
    },
  },
  plugins: [],
};
