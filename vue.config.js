module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? 'https://github.com/OlegYerokhin/Volunteer/blob/main/dist/index.html'
    : '/'
}