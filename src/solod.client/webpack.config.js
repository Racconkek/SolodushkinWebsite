const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: "./index.js", // входная точка - исходный файл
    output:{
        path: path.join(path.resolve(),'../../dist/solod.server/public'),     // путь к каталогу выходных файлов - папка public
        // publicPath: '/server/public/',
        filename: "bundle.js"       // название создаваемого файла
    },
    devServer: {
        port:8000,
        historyApiFallback: true,
        hot: true,
        // publicPath: '/',
        contentBase: path.join(__dirname, '../../dist/solod.server/public')
    },
    module:{
        rules:[   //загрузчик для jsx
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options:{
                    plugins: [
                        "@babel/plugin-proposal-class-properties",
                        "@babel/plugin-transform-modules-commonjs",
                        "@babel/plugin-transform-react-constant-elements",
                        "@babel/plugin-transform-runtime"
                    ],
                    presets:[
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ]  // используемые плагины
                }
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|ttf|eot|woff)$/,
                exclude: /(node_modules)/,
                use: [
                    'url-loader'
                ]
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '../', 'assets', 'photo'),
                    to: 'photo',
                },
                {
                    from: path.resolve('../', 'assets', 'fonts'),
                    to: 'fonts',
                },
            ],
        }),
    ],
};

