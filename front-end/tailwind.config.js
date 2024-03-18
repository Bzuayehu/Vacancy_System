/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],  
  theme: {
    extend: {
      colors:{
        "blueColor":"#0000ff ",
        "orangeColor":"#172a81",
        // "orangeColor":"#ffa500",
        "CardishColor":"#c0c0c0 ",
        // "textColor":"#808080",
        "textColor":"#333333",
        "gray":"#d3d3d3",
        "green2":"#4FAD53",
        "red":"#F44336",
        "green":"#6fd649",
        "blueBlack":"#172a81"
      }
    },
  },
  plugins: [],
}

