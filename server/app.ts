import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact.route';


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', contactRoutes);

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

export default app;