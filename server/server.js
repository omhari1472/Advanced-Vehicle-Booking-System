import express from 'express';
import http from 'http';
import 'dotenv/config'; // Load environment variables from .env file
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
// import carRoutes from './routes/carRoutes.js';
import { jwtSecret } from './config/config.js';
import { initializeSocket } from './services/socketServices.js';
import cors from 'cors'; // Import the CORS package

dotenv.config({ path: './secret/.env' });
console.log('JWT Secret:', jwtSecret);

connectDB();

const app = express();
const server = http.createServer(app); // Create HTTP server

initializeSocket(server); // Initialize Socket.io with the server

app.use(express.json());

// Enable CORS for all routes
app.use(cors());

app.use('/api/auth', authRoutes);
// app.use('/api/cars', carRoutes);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
