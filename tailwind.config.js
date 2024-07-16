/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '	#FFD700',
        secondary: '#334155',
        third: '#f9fafb',
        dark: '#1e293b',
        cyan: '#67e8f9',
        green: '#004643',
        bootstrap: '#7952B3',
        html: '#E34F26',
        cc: '#1572B6',
        figma: '#F24E1E',
        java: '#F7DF1E',
        yt: '#FF0000',
        gt: '#181717',
        ig: '#E4405F',
        str: '#FC4C02',
        gm: '#EA4335',
        vue: '#4FC08D',
        tlw: '#06B6D4',
        lara: '#FF2D20',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

