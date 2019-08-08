const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();
const {
  REACT_APP_API_PORT,
  REACT_APP_PORT
} = process.env;

const devProxy = {
  '/graphql': {
    target: `http://localhost:${REACT_APP_API_PORT}/graphql/`,
    pathRewrite: { '^/graphql': '/' },
    changeOrigin: true
  }
}

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

if (devProxy) {
  const proxyMiddleware = require('http-proxy-middleware')
  Object.keys(devProxy).forEach(function (context) {
    app.use(proxyMiddleware(context, devProxy[context]))
  })
}

app.listen(REACT_APP_PORT, () => {
  console.log('server listening:', REACT_APP_PORT)
});