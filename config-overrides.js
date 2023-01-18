const path = require('path')

const sassResourseLoaderRule = {
    test: /\.scss$/,
    loader: 'sass-resources-loader',
    options: {
    resources: path.resolve(__dirname, 'src/assets/scss/global/includes.scss')
  }
}

module.exports = function override(config, env) {
  
  config.module.rules.push(sassResourseLoaderRule)
  return config;
}