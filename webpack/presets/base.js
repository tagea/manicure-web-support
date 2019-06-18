const merge = require('webpack-merge');
const parts = require('./../parts');

module.exports = env => merge([
  parts.clean(),
  parts.resolveLoaders(),
  parts.resolve(),
  parts.file(),
  parts.defineConstants(env),
  parts.commonChunks()
]);
