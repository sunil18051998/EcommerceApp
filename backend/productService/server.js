import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';

const app = express();
const port = process.env.PORT || 3004;

app.use(cors());
app.use(express.json());
app.use('/products', productRoutes);

app.listen(port, () => {
  console.log(`Product Service listening on port ${port}`);
});