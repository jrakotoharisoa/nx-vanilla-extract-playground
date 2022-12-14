const { merge } = require('webpack-merge');
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = (config) => {
  return merge(config, {
    plugins: [new VanillaExtractPlugin()],
    module: {
        rules: [
          {
            test: /\.vanilla\.css$/i, // Targets only CSS files generated by vanilla-extract
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: require.resolve('css-loader'),
                options: {
                  url: false // Required as image imports should be handled via JS/TS import statements
                }
              }
            ]
          }
        ]
      }
  });
};
