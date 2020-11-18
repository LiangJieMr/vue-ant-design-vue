const path = require("path");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const env = process.env.NODE_ENV;
module.exports = {
  publicPath: "./",
  // 输出文件目录
  outputDir: "dist",
  devServer: {
    open: true,
    port: 8080,
    hot: true
  },
  /* 生产环境的source map */
  productionSourceMap: true,
  chainWebpack: config => {
    config.resolve.alias.set("@", path.resolve(__dirname, "./src"));
  },
  configureWebpack: {
    plugins: [
      new StyleLintPlugin({
        files: ["src/views/**/*.{html,vue,css,sass,scss,less}"],
        fix: false, // 是否自动修复
        cache: false, // 是否缓存
        emitErrors: true,
        failOnError: false
      })
    ]
  },
  css: {
    sourceMap: env === "development",
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false
};
