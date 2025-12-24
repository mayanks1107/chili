/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}"
    ],
    theme: {
      extend: {
        colors: {
          primary: "#C81E1E",
          secondary: "#F97316",
          background: "#FFF7ED",
          dark: "#1C1917",
          muted: "#78716C",
        },
      },
    },
    plugins: [],
  }
  