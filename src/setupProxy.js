const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/BE",
        createProxyMiddleware({
            target: process.env.REACT_APP_BACKEND_URL,
            changeOrigin: true,
            // pathRewrite: {
            //     '^/api': '' // URL ^/api -> 공백 변경
            // }
        })
    );
    app.use(
        "/API",
        createProxyMiddleware({
            target: process.env.REACT_APP_ANOTHER_BACKEND_URL,
            changeOrigin: true,
            // pathRewrite: {
            //     '^/API': '' // URL ^/API -> 공백 변경
            // }
        })
    );
};
