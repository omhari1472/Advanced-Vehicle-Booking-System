import express from 'express';
import http from 'http'; // Import http module for creating server
import 'dotenv/config'; // Load environment variables from .env file
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import { jwtSecret } from './config/config.js';
import socketio from 'socket.io'; // Import Socket.io

dotenv.config({ path: './secret/.env' });
// const jwtSecret = process.env.JWT_SECRET;
console.log('JWT Secret:', jwtSecret);

connectDB(); // Ensure MongoDB connection is established

const app = express();
const server = http.createServer(app); // Create HTTP server
const io = socketio(server); // Create Socket.io instance tied to server

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Socket.io integration for real-time updates
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  // Example: Handle real-time events
  socket.on('bookVehicle', (data) => {
    // Handle booking logic
    console.log('Vehicle booked:', data);
    io.emit('updateAvailability', data); // Emit update to all clients
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
