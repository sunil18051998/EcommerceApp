
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import httpProxy from 'http-proxy';

const app = express();
const proxy = httpProxy.createProxyServer();
const port = 8000;

app.use(cors());
app.use(express.json());

// Proxy requests to different services
app.use('/auth', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3001' }); // Auth service
});
app.use('/products', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3002' }); // Product service
});
app.use('/orders', (req, res) => {
   proxy.web(req, res, { target: 'http://localhost:3003' });  // Order Service
});

app.listen(port, () => {
  console.log(`API Gateway listening on port ${port}`);
});