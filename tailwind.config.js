


module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./public/**/*.html"],
  theme: {
    fontFamily:{
      sans: ['Montserrat', "sans-serif"]
    },
    extend: {
        fontSize: {
          'display': 'clamp(1.25rem, 5vw, 5rem)',
          'display-description': 'clamp(1.25rem, 5vw, 2rem)',
          'display-footer': 'clamp(1.25rem, 5vw, 3.25rem)',
          'section-title-xl': '10rem',
          'section-title-lg': '8rem',
          'section-title-md': '5.8rem',
          'section-title-sm': '2.25rem',
        },
        height: {
            '560': "35rem",
            '500': "31.25rem"
        },
        maxWidth: {
            'xl-vw': '80vw',
            '2xl-vw': '85vw',
            
        },
        spacing:{
            '72' : '18rem',
            '80' : '20rem'

        },
        screens: {
            '2xl': '1800px',
            '3xl': '2000px'
        }
    },
  },
  variants: {},
  plugins: [],
}
