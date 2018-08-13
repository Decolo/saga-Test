const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const staticPath = process.cwd();
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(staticPath, 'src/app.tsx'),
    output: {
        filename: "[name].js",
        path: path.resolve(staticPath, "dist")
    },  
    devServer: {
      https: false,
      open: true,
      historyApiFallback: true,
      overlay: {
        warning: true,
        errors: true
      },
      contentBase: path.resolve(staticPath, "/dist"),
      port: 8080
    },
    devtool: "source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
            '@': path.resolve(staticPath, "src")
        }
    },
    
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { 
                test: /\.(tsx|ts)?$/, 
                use: ['awesome-typescript-loader']
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { 
                enforce: "pre", 
                test: /\.js$/, 
                loader: ['source-map-loader']
            },
            {
                test:/\.(jsx|js)$/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                use:['babel-loader'],
                exclude: /node_modules/, // 去除掉node_modules文件夹的js 不然node_modules也都转换了
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?modules",
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/, // 取消匹配node_modules里面的文件
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, 
            
        ]
    },
    plugins: [
        new HTMLPlugin({
            template: path.resolve(staticPath, 'src/index.html')
        }), // 生成一个html页面，同时在webpack编译的时候。把我们所生成的entry都注入到这个html页面中,路径都是根据我们output配置的来走的。
    ]
};