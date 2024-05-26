const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/BE",
        createProxyMiddleware({
            target: "http://geport.blog",
            changeOrigin: true,
            // pathRewrite: {
            //     '^/api': '' // URL ^/api -> 공백 변경
            // }
        })
    );
};
