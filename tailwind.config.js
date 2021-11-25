module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      desk: '1342px',
      tl:{max: '1341px'},
      ts:{max: '939px'},
      ml:{max: '767px'},
      ms:{max: '339px'},
    },
    colors: {
      purple: '#8350E6',
      'purple-5': '#F9F6FE',
      'purple-10': '#F3EEFC',
      'purple-20': '#E6DCFA',
      'purple-40': '#CDB9F5',
      'purple-50': '#C1A7F2',
      'purple-60': '#B596F0',
      'purple-80': '#996AF1',
      'purple-90': '#e7defa',

      'dark-purple': '#4C14A5',
      'dark-purple-80': '#7043B7',

      'black-100': '#151516',
      'black-80': '#444445',
      'black-60': '#737373',
      'black-50': '#8A8A8A',
      'black-40': '#A1A1A2',
      'black-20': '#D0D0D0',
      'black-10': '#E8E8E8',

      blue: '#0E97F2',
      'blue-10': '#E5F3FC',
      'blue-20': '#CFEAFC',
      'blue-40': '#6EC1F7',
      'blue-50': '#86CBF8',
      'blue-60': '#9FD5FA',

      'gray-100': '#2D2D30',
      'gray-80': '#575759',
      'gray-60': '#818183',
      'gray-50': '#969697',
      'gray-40': '#ABABAC',
      'gray-25': '#FCFCFC',
      'gray-20': '#D5D5D6',
      'gray-10': '#EAEAEA',
      'gray-5': '#F5F5F5',

      red: '#FE4A49',
      'red-20': '#FFDBDB',

      green: '#32E875',
      'green-20': '#D6FAE3',
      'green-30': '#BFEDDC',
      'green-40': '#36BF8D',

      white: "#FFF",
      "white-0": "rgba(255, 255, 255, 0.0)",
      "white-02": "rgba(255, 255, 255, 0.2)",
      "white-04": "rgba(255, 255, 255, 0.4)",
      "white-06": "rgba(255, 255, 255, 0.6)",
      "white-08": "rgba(255, 255, 255, 0.8)",
    },
    fontSize: {
      xs: '.625rem',
      sm: '.75rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.75rem',
      '4xl': '2rem',
      '5xl': '2.25rem',
      '6xl': '3rem',
      '7xl': '4rem'
    },
    fontFamily: {
      krub: "Krub",
      open: "Open Sans"
    },
    boxShadow: {
      spurple: '0 5px 20px rgba(131, 80, 230, 0.2)',
      sblue: '0 5px 20px rgba(14, 151, 242, 0.2)',
      sred: '0px 5px 20px rgba(254, 74, 73, 0.2)',
      spurpleup: '0px 5px 20px rgba(131, 80, 230, 0.05);',  
      sgray: '0px 5px 15px rgba(131, 100, 191, 0.1)',
      sgraysmall: '0px 4px 8px rgba(70, 64, 82, 0.1)'
    },
    extend: {
      borderRadius: {
        0: '0',
        2: '10px',
        4: '20px',
        6: '32px',
        full: '9999px'
      },
      maxWidth: {
        xxs: "17rem",
        cl: "77.875rem",
        cs: "60rem",
        cxs: "60rem",
        cxxs: "30rem",
      },
      height: {
        13: "3.25rem",
        xl: "45rem",

      },
      width : {
        lg: "33rem",
        xl: "45rem",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
