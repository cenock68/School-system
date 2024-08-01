import { createProxyMiddleware } from 'http-proxy-middleware';

export default function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://cess.statify.co.ke',
      changeOrigin: true,
      onProxyReq: (proxyReq, req, res) => {
        proxyReq.setHeader('Authorization', `Basic ${Buffer.from('27c75835475696f:6caa99db4628f6e').toString('base64')}`);
      }
    })
  );
};
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://cess.statify.co.ke',
      changeOrigin: true,
      onProxyReq: (proxyReq, req, res) => {
        proxyReq.setHeader('Authorization', `Basic ${Buffer.from('27c75835475696f:6caa99db4628f6e').toString('base64')}`);
      }
    })
  );
};