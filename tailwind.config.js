module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      primary: '#00FF66',
      secondary: '#313232'
    },
    fontFamily: {
      head: 'Oswald'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
