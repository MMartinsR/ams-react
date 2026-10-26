const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.tsx",
  output: {
    path: path.join(__dirname, "/build")
  },
  devServer: { port: 3000 },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(?:ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
            /*options: {
                            transpileOnly: true
                        }*/
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "AMS-REACT",
      template: "./public/index.html",
      filename: "index.html"
    })
  ]
};
