const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.plugins.push(new FriendlyErrorsWebpackPlugin());
  defaultConfig.resolve.alias = {
    "@app": path.resolve(process.cwd()),
    vue: "vue/dist/vue.js"
  };
  return defaultConfig;
};
