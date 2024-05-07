import express from 'express';
import dotenv from 'dotenv';
import noteRoutes from './routes/noteRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use('/notes', noteRoutes)

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}/notes`);
});