const path = require("path");
const WebpackAssetsManifest = require("webpack-assets-manifest");

module.exports = {
  chainWebpack: (config) => {
    config.entryPoints.delete("app");

    config
      .entry("app")
      .add("./src/main.js")
      .end()
      .entry("app-legacy")
      .add("./src/main-legacy.js")
      .end();

      config.resolve.alias.set('@', path.join(__dirname, './src'));

    if (process.env.NODE_ENV === "production") {
      config.plugin("WebpackAssetsManifest").use(WebpackAssetsManifest, [
        {
          output: "manifest.json",
        },
      ]);
    }
  },
  outputDir: path.join(__dirname, "../back/dist/assets/"),
  indexPath: './index.html',
  css: {
    extract: false,
  },
  devServer: {
    disableHostCheck: true,
    proxy: {
      ".*": {
        target: "http://localhost:3000",
        ws: false,
        changeOrigin: false,
      },
    },
  },
  productionSourceMap: false,
};
