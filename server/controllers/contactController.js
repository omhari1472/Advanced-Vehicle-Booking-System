// controllers/contactController.js

import { validationResult } from 'express-validator';
import Contact from '../models/contact.js'; // Assuming you have a Contact model defined

// Handle POST request to /api/contact
const contactUs = async (req, res) => {
  // Validate request body (if using express-validator)
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Extract email and message from request body
  const { email, message } = req.body;

  try {
    // Create a new contact record
    const newContact = new Contact({ email, message });
    // Save the contact record to the database
    await newContact.save();

    // Respond with success message
    res.json({ message: 'Message saved successfully!' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ message: 'Failed to save message. Please try again later.' });
  }
};

export { contactUs };
