const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
   entry:"./js/index.js",
   output : {
      filename:"bundle.js",
      path : path.resolve(__dirname,"./dist"),
      clean : true
   },
   devtool : "source-map",
   mode : "development",
   Plugins:[
      new HtmlWebpackPlugin({
         title:"keyboard",
         template : "./index.html",
         inject : "body",
         favicon : "./favicon.ico"
      }),
      new MiniCssExtractPlugin({filename:"style.css"})
   ],

   module:{
      rules:[
         {
            test:/\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
         }
      ]
   },
   optimization :{
      minimizer:[
         new TerserPlugin(),
         new CssMinimizerPlugin()
      ]
   },
      
};
