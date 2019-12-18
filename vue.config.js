module.exports = {
    // webpack 提供的本地服务
    // 解决本地开发时的跨域问题
    // 跨域只存在浏览器端
    // 宽裕时浏览器的同源策略：通协议，同域名，同端口
    // 跨域常见的解决方式
    //1.jsonp跨域：原理是利用script标签可以跨域的特点，不过只能发送get请求
    //2.cirs:跨域资源共享，不需要前端配合，只需要后端配置指定端口可以访问接口
    //3.代理(wenpack提供的devServer):把要跨域的路径代理到本地
    devServer: {
        host: '0.0.0.0',
        proxy: {
            '/api': {
                ws: false,
                //把target改成我们本地接口的根路径
                //修改了vue.config.js文件 一定要重启项目
                //http
                //接口就被代理成'/api'
                target: 'https://cnodejs.org/api/v1',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}