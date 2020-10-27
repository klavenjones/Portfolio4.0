


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
          'display-footer': 'clamp(1rem, 5vw, 3.75rem)',
          'section-title': 'clamp(10rem, 5vw, 15rem)',
        },
        height: {
            '560': "35rem",
            '500': "31.25rem"
        }
    },
  },
  variants: {},
  plugins: [],
}
