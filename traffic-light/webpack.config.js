const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode:"development",
    entry: './index.js',
    devServer:{
        static: "./dist"
    },
    output:{
        filename:"bundle.[hash].js",
        path:path.resolve(__dirname,"dist")
    },
    devtool: "inline-source-map",
    module:{
        rules:[
            {
                test:/\.(js)$/,
                exclude: /node_modules/,
                use:['babel-loader']
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                    },
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'public/index.html',
        })
    ],
    devServer: {
        host: 'localhost',
        port: 8080,
        historyApiFallback: true,
        open: true
    }
}