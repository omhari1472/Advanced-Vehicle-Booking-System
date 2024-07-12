import express from "express";
import { register, login } from "../controllers/authController.js";
import { body } from "express-validator";
import { contactUs } from "../controllers/contactController.js";
import {
  createBikeBooking,
  getBikeBookings,
  getBikeBookingById,
  updateBikeBooking,
  deleteBikeBooking,
} from "../controllers/bikeBookingController.js";
import { createCar, getCars, getCarById, updateCar, deleteCar, bookCar } from '../controllers/carController.js';
import { createDocument, getDocuments, getDocumentById, updateDocument, deleteDocument } from '../controllers/bookingDocument.js';
import upload from '../middleware/multerConfig.js';

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post(
  "/contact",
  [
    body("email").isEmail().withMessage("Please provide a valid email address"),
    body("message").notEmpty().withMessage("Message cannot be empty"),
  ],
  contactUs
);

router.post("/bikeBooking", createBikeBooking);
router.get("/bikeBooking", getBikeBookings);

router.get("/bikeBooking/:id", getBikeBookingById);
router.put("/bikeBooking/:id", updateBikeBooking);
router.delete("/bikeBooking/:id", deleteBikeBooking);

router.post('/car', upload.single('image'), createCar);
router.post('/bookcar', upload.single('image'), bookCar);
router.get('/car', getCars);
router.get('/car/:id', getCarById);
router.put('/car/:id', upload.single('image'), updateCar);
router.delete('/car/:id', deleteCar);


router.post('/documents', upload.single('drivingLicense'), createDocument);
router.get('/documents', getDocuments);
router.get('/documents/:id', getDocumentById);
router.put('/documents/:id', upload.single('drivingLicense'), updateDocument);
router.delete('/documents/:id', deleteDocument);

export default router;