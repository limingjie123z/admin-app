const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);

const CompressionWebpackPlugin = require("compression-webpack-plugin");
const zopfli = require("@gfx/zopfli");
const BrotliPlugin = require("brotli-webpack-plugin");
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;

module.exports = {
    configureWebpack: config => {
        const plugins = [];
        if (IS_PROD) {
            plugins.push(
                new CompressionWebpackPlugin({
                    algorithm(input, compressionOptions, callback) {
                        return zopfli.gzip(input, compressionOptions, callback);
                    },
                    compressionOptions: {
                        numiterations: 15
                    },
                    minRatio: 0.99,
                    test: productionGzipExtensions
                })
            );
            plugins.push(
                new BrotliPlugin({
                    test: productionGzipExtensions,
                    minRatio: 0.99
                })
            );
        }
        config.plugins = [...config.plugins, ...plugins];
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/style/index.scss";`

            }
        }
    },
    pwa: {
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    },
    publicPath: IS_PROD ? process.env.VUE_APP_PUBLIC_PATH : "./", // 默认'/'，部署应用包时的基本 URL
    // outputDir: process.env.outputDir || 'dist', // 'dist', 生产环境构建文件的目录
    // assetsDir: "", // 相对于outputDir的静态资源(js、css、img、fonts)目录
    lintOnSave: false,
    runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
    productionSourceMap: !IS_PROD, // 生产环境的 source map
    parallel: require("os").cpus().length > 1
};