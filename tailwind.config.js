module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          classic: "#3f51b5",
          light: "#757de8",
          dark: "#002984"
        },
        secondary: {
          classic: "#f44336",
          light: "#ff7961",
          dark: "#ba000d"
        },
        accent: {
          classic: "#facc15",
          light: "#fde047",
          dark: "#854d0e"
        },
        txt: {
          primary: "#ffffff",
          secondary: "#000000",
        }
      }
    },
  },
  plugins: [],
}
