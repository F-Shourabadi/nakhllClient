const path = require('path');
const webpack = require('webpack')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const distDir = path.join(__dirname, '../dist');
const srcDir = path.join(__dirname, '../src');

module.exports = [
    {
        name: 'client',
        target: 'web',
        entry: `${srcDir}/Client.jsx`,
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'client.js',
            publicPath: '/dist/',
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules[\\\/])/,
                    use: [
                        {
                            loader: 'babel-loader',
                        }
                    ]
                },
                {
                    test: /\.pcss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: true,
                                    importLoaders: 1,
                                    localIdentName: '[local]',
                                    sourceMap: true,
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    config: {
                                        path: `${__dirname}/../postcss/postcss.config.js`,
                                    }
                                }
                            }
                        ]
                    })
                },
                {
                    test: /\.css$/i,
                    loader: 'css-loader',
                    options: {
                        import: true,
                        url: true
                    }
                }
            ],
        },
        plugins: [
            new ExtractTextPlugin({
                filename: 'styles.css',
                allChunks: true
            })
        ]
    },
    {
        name: 'server',
        target: 'node',
        entry: `${srcDir}/Server.jsx`,
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'server.js',
            libraryTarget: 'commonjs2',
            publicPath: '/dist/',
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules[\\\/])/,
                    use: [
                        {
                            loader: 'babel-loader',
                        }
                    ]
                },
                {
                    test: /\.pcss$/,
                    use: [
                        {
                            loader: 'isomorphic-style-loader',
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                                localIdentName: '[local]',
                                sourceMap: false
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                config: {
                                    path: `${__dirname}/../postcss/postcss.config.js`,
                                }
                            }
                        }
                    ]
                },
                {
                    test: /\.css$/i,
                    loader: 'css-loader',
                    options: {
                        import: true,
                        url: true
                    }
                }
            ],
        },
    }
];