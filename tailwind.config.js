module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      primary: '#00FF66',
      secondary: '#313232',
      tertiary: '#F8F8F8',
      grey: '#E4E6E8'
    },
    fontFamily: {
      head: 'Oswald',
      title: 'poppins',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
