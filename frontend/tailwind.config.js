module.exports = {
    prefix: '',
    purge: {
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          mango: '#ffc324',
          mango500: '#F0AE00',
          aqua: '#2460FF',
          navy: '#2460ff',
          orange: '#ff5524'
        },
        fontFamily: {
          montserrat: ['Montserrat'],
          roboto: ['Roboto'],
          arvo: ['Arvo'],
          oswald: ['Oswald'],
          mulish: ['Mulish'],
        },
        screens: {
          'max-xl': {'max': '1440px'},
          'max-lg': {'max': '1024px'},
          'max-md': {'max': '768px'},
          'max-sm': {'max': '425px'},
          'max-xs': {'max': '320px'}
        }
      }
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
