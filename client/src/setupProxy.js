// proxy 설정 - CORS 이슈를 해결하기 위한

const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://3.39.166.191:5000",
      chagneOrigin: true,
    })
  );
};
