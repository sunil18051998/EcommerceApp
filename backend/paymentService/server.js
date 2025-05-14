import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3003;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Payment Service listening on port ${port}`);
});