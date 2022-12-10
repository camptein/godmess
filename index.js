const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const preFetch = (req, res, next) => {
  if (req.headers.authorization)
    console.log('authorization exists')
  else
    console.log('authorization does not exist')
  next()
}

app.use('/app', preFetch, createProxyMiddleware({
  target: 'http://localhost:443', changeOrigin: true, pathRewrite: {
    '^/app/': '/'
  }
}));
app.listen(443);
