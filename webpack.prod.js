const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");
const ExtraWatchWebpackPlugin = require("extra-watch-webpack-plugin");
const HtmlWebpack = require("html-webpack-plugin");
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",

  output: {
    clean: true,
    filename: "main.[contenthash].js",
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          sources: false,
        },
      },
      {
        test: /\.css$/,
        exclude: /styles.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /styles.css$/,
        use: [MiniCssExtract.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/,
        loader: "file-loader",
      },
    ],
  },

  optimization: {},

  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),

    new HtmlWebpack({
      title: "Index",
      template: "./src/index.html",
    }),

    new ExtraWatchWebpackPlugin({
      dirs: [path.join(__dirname, "src")],
    }),

    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, "./src/pages/home/home.html"),
      location: "home",
      template_filename: ["index.html"],
    }),

    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, "./src/components/header/header.html"),
      location: "header",
      template_filename: ["index.html"],
    }),

    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, "./src/components/footer/footer.html"),
      location: "ffooter",
      template_filename: ["index.html"],
    }),

    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, "./src/pages/semana3/semana3.html"),
      location: "semana3",
      template_filename: ["index.html"],
    }),

    new HtmlWebpackPartialsPlugin({
      path: path.join(
        __dirname,
        "./src/pages/semana3/user-search/userSearch.html"
      ),
      location: "userSearch",
      template_filename: ["index.html"],
    }),

    new HtmlWebpackPartialsPlugin({
      path: path.join(
        __dirname,
        "./src/pages/semana3/whatsapp-link-gen/whatsappLinkGenerator.html"
      ),
      location: "whatsappLinkGenerator",
      template_filename: ["index.html"],
    }),

    new MiniCssExtract({
      filename: "[name].css",
      ignoreOrder: false,
    }),

    new CopyPlugin({
      patterns: [{ from: "src/assets/", to: "assets/" }],
    }),
  ],
};
