/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        mainfont:[
          '"Nunito Sans", Arial, sans-serif'
        ]
      },
      colors:{
        textColor:"#111517",
        bodyColor:"#fafafa",
        sectionColor:"#FFFFFF",
        bodyDark:"#202C36",
        sectionDark:"#2B3844"
      },
      backgroundImage:{
        "light-searchimg":'url("../images/icon-search-black.svg")',
        "light-option":'url("../images/Shape.svg")',
        "dark-searchimg":'url(../images/search-white.svg)',
        "dark-option":'url(../images/Shapew.svg)'

      },
      backgroundPosition:{
        calc:"calc(5% + 15px) calc(5% + 20px)",
        calcInput:"calc(50% + 70px) calc(10% + 22px)"
      },
      boxShadow:{
        mainShadow:" 0px 2px 4px rgba(0, 0, 0, 0.0562443)",
        cardShadow:" 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384)"
      },

    },

  },
  plugins: [],
}
