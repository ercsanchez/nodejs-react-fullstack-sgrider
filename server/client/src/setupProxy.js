const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    // /api/* ensures that route /api or /api/  won't match but nested routes (e.g. /api/any-char) will match
    ['/api/*', '/auth/google'],
    createProxyMiddleware({
      target: 'http://localhost:5000',
    })
  );
};
