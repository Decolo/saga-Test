const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "/dist"),
        publicPath: '/'
    },
    
    devServer: {
      https: false,
      open: true,
      historyApiFallback: true,
      overlay: {
        warning: true,
        errors: true
      },
      contentBase: path.join(__dirname, "/dist"),
      port: 8080
    },


    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                include: [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules/antd')],
            },
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { 
                test: /\.tsx?$/, 
                loader: ['awesome-typescript-loader']
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { 
                enforce: "pre", 
                test: /\.js$/, 
                loader: ['source-map-loader']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/, // 取消匹配node_modules里面的文件
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test:/\.(jsx|js)$/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                use:['babel-loader'],
                exclude:/node_modules/ // 去除掉node_modules文件夹的js 不然node_modules也都转换了
            }                        
        ]
    },

    
        
};








// module.exports = {
//   entry: {
//     index: './src/js/index.tsx',
//   },
//   output: {
//     filename: 'bundle.[hash:6].js',
//     path: path.resolve(process.cwd(), 'dist')
//   },
//   devtool: "source-map",
//   resolve: {
//     extensions: [".ts", ".tsx", ".js", ".json"]
//   },
//   externals: {
//     "react": "React",
//     "react-dom": "ReactDOM"
//   },
//   devServer: {
//     https: false,
//     open: true,
//     overlay: {
//       warning: true,
//       errors: true
//     },
//     port: 8080
//   },
//   module: {
//     rules: [
//       { test: /\.(ts|tsx)$/, use: [{loader: 'awesome-typescript-loader'}] },
//       { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/index.html',
//       hash: true,
//       minify: {
//         minifyCSS: true,
//         minifyJS: true,
//         removeAttributeQuotes: true
//       }
//     })
//   ]
// }


