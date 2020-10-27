


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
          'display': 'clamp(1.25rem, 5vw, 5rem)'
        }
    },
  },
  variants: {},
  plugins: [],
}
