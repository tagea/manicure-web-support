const merge = require('webpack-merge');

const parts = require('./../parts');
const baseConfig = require('./base');

module.exports = (env) => {
  const config = merge([
    {
      mode: 'production',
      optimization: {
        minimize: true
      }
    },
    parts.entry({ hotReload: false }),
    parts.output({ optimize: true }),
    parts.indexTemplate(),
    parts.scripts({ sourceMaps: false, optimize: true })
  ]);

  return merge([baseConfig(env), config]);
};
