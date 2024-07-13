import express from "express";
import http from "http";
import Stripe from "stripe";
import "dotenv/config"; // Load environment variables from .env file
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
// import carRoutes from './routes/carRoutes.js';
import { jwtSecret } from "./config/config.js";
import { initializeSocket } from "./services/socketServices.js";
import cors from "cors"; // Import the CORS package

dotenv.config({ path: "./secret/.env" });
console.log("JWT Secret:", jwtSecret);

connectDB();

const app = express();
const server = http.createServer(app); // Create HTTP server

initializeSocket(server); // Initialize Socket.io with the server

app.use(express.json());

// Enable CORS for all routes
app.use(cors());

app.use("/api/auth", authRoutes);
// app.use('/api/cars', carRoutes);

app.use(express.static(process.env.STATIC_DIR));

app.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "EUR",
      amount: 1999,
      automatic_payment_methods: { enabled: true },
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
