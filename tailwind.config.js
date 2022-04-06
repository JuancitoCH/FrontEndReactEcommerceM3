module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      'Roboto':['Roboto Condensed',"sans-serif"],
      'Abril':['Abril Fatface', "cursive"],
      'Barlow':['Barlow', "sans-serif"],
      'Bebas':['Bebas Neue', "cursive"]
    },
    extends:{

      transitionDuration:{
        '2000':'2000ms',
        '5000':'5000ms',
        '8000':'8000ms',
        '10000':'10000ms',
        '3000':'3000ms',
      }
    }
  },
  plugins: [],
}
