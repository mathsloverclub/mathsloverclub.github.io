const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");
const RemoveWebpackPlugin = require("remove-files-webpack-plugin");

let htmlPlugins = [];
(function generateHtmlPlugins() {
  const topics = fs
    .readdirSync(path.resolve(__dirname, "./src/topic"), {
      withFileTypes: true,
    })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
  topics.map((topic) => {
    const htmls = fs.readdirSync(
      path.resolve(__dirname, `./src/topic/${topic}`)
    );
    htmls.map((html) => {
      const parts = html.split(".");
      const name = parts[0];
      const extension = parts[1];
      const htmlPlugin = new HtmlWebpackPlugin({
        filename: `topic/${topic}/${name}.html`,
        template: path.resolve(
          __dirname,
          `./src/topic/${topic}/${name}.${extension}`
        ),
        // minify: {
        //   collapseWhitespace: isProd,
        // },
        // inject: true,
      });
      htmlPlugins.push(htmlPlugin);
    });
  });
})();

module.exports = {
  mode: "production",
  entry: "./src/assets/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    watchContentBase: true,
    port: 3000,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
    new RemoveWebpackPlugin({
      before: {
        test: [
          {
            folder: "./dist",
            method: () => true,
          },
        ],
        exclude: ["./dist/.git"],
      },
    }),
  ].concat(htmlPlugins),
};
