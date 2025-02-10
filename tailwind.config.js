/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navColor': '#767676',
        'navHColor': '#262626',
        'headerbgColor': '#F5F5F3',
        'fnColor': '#6D6D6D',
        
        
        
      },
      fontFamily: {
          'dm': ['DM Sans'], 
        },  
        backgroundImage: {
          'bannerImg': "url('./src/assets/Intro.png')",
          'palak': "url('./src/assets/Polok.png')",
          
        },
        maxWidth:{
           checkOutCotainer:"1057px"
        }
    },
  },
  plugins: [],
}

