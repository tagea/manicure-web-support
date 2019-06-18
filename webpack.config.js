/* eslint-disable */

module.exports = (env) => {
  if (env.development) {
    return require('./webpack/presets/dev.js')(env);
  }

  return require('./webpack/presets/prod.js')(env);
};
