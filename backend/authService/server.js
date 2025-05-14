import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Auth Service listening on port ${port}`);
});