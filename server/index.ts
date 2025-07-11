// server/index.ts
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import app from './app';

dotenv.config();
const PORT = process.env.PORT || 1000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
});