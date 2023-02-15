const path = require("path");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");
const HtmlWebpack = require("html-webpack-plugin");
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const CssMinimizer = require("css-minimizer-webpack-plugin");
const Terser = require("terser-webpack-plugin");

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
        test: /\.(png|jpe?g|gif)$/,
        loader: "file-loader",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },

  optimization: {
    minimize: true,
    minimizer: [new CssMinimizer(), new Terser()],
  },

  plugins: [
    new HtmlWebpack({
      title: "Lab365 Fullstack JS App",
      template: "./src/index.html",
    }),

    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, "./src/views/home.html"),
      location: "home",
      template_filename: ["index.html"],
    }),

    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, "./src/views/login.html"),
      location: "login",
      template_filename: ["index.html"],
    }),

    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, "./src/views/navegador.html"),
      location: "navegador",
      template_filename: ["index.html"],
    }),

    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, "./src/views/footer.html"),
      location: "ffooter",
      template_filename: ["index.html"],
    }),

    new MiniCssExtract({
      filename: "[name].[fullhash].css",
      ignoreOrder: false,
    }),

    new CopyPlugin({
      patterns: [{ from: "src/assets/", to: "assets/" }],
    }),
  ],
};
