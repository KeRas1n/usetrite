// include dependencies
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// create the proxy
/** @type {import('http-proxy-middleware/dist/types').RequestHandler<express.Request, express.Response>} */
const exampleProxy = createProxyMiddleware({
  target: 'http://localhost:8800/api', // target host with the same base path
  changeOrigin: true, // needed for virtual hosted sites
});

// mount `exampleProxy` in web server
app.use('/api', exampleProxy);
app.listen(3000);