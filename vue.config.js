const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/style/index.scss";`

            }
        }
    },
    pwa:{
        iconPaths:{
            favicon32:'favicon.ico',
            favicon16:'favicon.ico',
            appleTouchIcon:'favicon.ico',
            maskIcon:'favicon.ico',
            msTileImage:'favicon.ico'
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