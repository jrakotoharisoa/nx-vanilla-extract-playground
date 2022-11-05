const { merge } = require('webpack-merge');
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
module.exports = (config) => {
  return merge(config, {
    plugins: [new VanillaExtractPlugin()],
  });
};
