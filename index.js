import express from 'express';
import dotenv from 'dotenv';
import noteRoutes from './routes/noteRoutes.js';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(cors({
    origin: 'http://localhost:5173'
  }));
app.use(express.json());

app.use('/', noteRoutes)

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});