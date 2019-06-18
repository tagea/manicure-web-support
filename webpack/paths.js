const path = require('path');

const root = path.join(__dirname, '../');
const src = path.join(root, 'src');

const paths = {
  root,
  dist: path.join(root, 'dist'),
  appIndex: path.join(root, 'index.js'),
  mainTemplate: path.join(src, 'index.html'),
  nodeModules: path.join(root, 'node_modules')
};

module.exports = paths;
