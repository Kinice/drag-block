module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: [
        '> 1%',
        'last 10 versions',
        'not ie <= 8',
        'iOS >= 8'
      ]
    })
  ]
}
