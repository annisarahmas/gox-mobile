const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sass|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
          test: /\.(png|jpg|jpeg|gif)$/i,
          use: [
              {
                  loader: 'url-loader',
                  options: {
                      limit: 15000,
                  }
              }

          ]
      },
      {
          test: /\.svg$/,
          use: {
              loader: `svg-sprite-loader?` + JSON.stringify({
                  name: '[name]_[hash]',
                  prefixize: true
              })
          }
      },
      {
          test: /\.woff|.eot|\.ttf/,
          use: {
              loader: 'url?prefix=font/&limit=10000'
          }
      },
      {
        test: /\.js(x)?$/,
        exclude: [/node_modules\/(?!(swiper|dom7)\/).*/, /\.test\.js(x)?$/],
        use: [{ loader: 'babel-loader' }],
      }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
