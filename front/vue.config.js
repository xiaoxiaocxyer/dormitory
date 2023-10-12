// 跨域配置
module.exports = {



    // 生产代理路径在 utils/request.js 文件中修改, 将"/api"去掉, vue打完包之后, 直接放在后端项目中



    publicPath: './',// vue-cli3.3+新版本使用

    devServer: {                //记住，别写错了devServer//设置本地默认端口  选填
        // port: 9876,
        proxy: {                 //设置代理，必须填
            '/api': {              //设置拦截器  拦截器格式   斜杠+拦截器名字，名字可以自己定
                target: 'http://localhost:1003/',     //前端打包可以直接放在后端, 端口地址都是1103
                changeOrigin: true,              //是否设置同源，输入是的
                pathRewrite: {                   //路径重写
                    '^/api': ''                     //选择忽略拦截器里面的内容
                }
            }
        }
    }
}

