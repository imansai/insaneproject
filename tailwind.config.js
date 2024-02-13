/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    fontFamily: {
      valorax: ["valorax", "serif"],
      space: ["Space Mono", "sans-serif"],
      decima: ["Decima Mono X", "sans-serif"],
      ron: ["Ron", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'gradient-to-t': 'linear-gradient(to top, #000000, transparent)',
      },
      animation: {
        'floating': 'floating 3s ease-in-out infinite',
      },
      keyframes: {
        floating: {
         ' 0%': { transform: 'translate(0,  0px)'},
          '50%':  { transform: 'translate(0, 15px)' },
          '100%':   { transform: 'translate(0, -0px)'},
        },
      },
    },
  },
  plugins: [],
}