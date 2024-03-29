const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    home: path.resolve(__dirname, 'src/js/home.js'),
    precios: path.resolve(__dirname, 'src/js/precios.js'),
    contacto: path.resolve(__dirname, 'src/js/contacto.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  }
};
