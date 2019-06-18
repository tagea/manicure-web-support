const merge = require('webpack-merge');

const parts = require('./../parts');
const baseConfig = require('./base');

module.exports = (env) => {
  const config = merge([
    {
      devtool: 'cheap-module-source-map',
      mode: 'development'
    },
    parts.entry({ hotReload: true }),
    parts.output({ optimize: false }),
    parts.indexTemplate(),
    parts.scripts({ sourceMaps: true, optimize: false }),
    parts.devServer(),
    parts.esLint()
  ]);

  return merge([baseConfig(env), config]);
};
