const path = require("path");
const frontConfig = {
  entry: { index: ["./src/js/index.js"], chatroom: ["./src/js/chatroom.js"] },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].bundle.js",
    publicPath: "/",
  },

  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    watchContentBase: true,
    publicPath: "/",
  },
};

// const backConfig = {
//   target: "node",
//   entry: ["./server.js"],
//   output: {
//     path: path.join(__dirname, "dist"),
//     filename: "main_back.js",
//   },
//   externals: [nodeExternals()],
// };

// module.exports = [frontConfig, backConfig];
module.exports = frontConfig;
