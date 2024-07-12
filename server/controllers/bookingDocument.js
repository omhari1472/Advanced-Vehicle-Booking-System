import Document from '../models/documentRequiredForBooking.js';
import cloudinary from '../config/cloudinary.js';

// @desc    Create a new document
// @route   POST /api/documents
// @access  Public
export const createDocument = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const result = await cloudinary.v2.uploader.upload(req.file.path, {
      resource_type: 'auto' // This allows Cloudinary to accept any file type, including PDFs
    });

    const document = new Document({
      name,
      email,
      message,
      drivingLicense: result.secure_url
    });

    const createdDocument = await document.save();
    res.status(201).json(createdDocument);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create document', error: error.message });
  }
};

// @desc    Get all documents
// @route   GET /api/documents
// @access  Public
export const getDocuments = async (req, res) => {
  try {
    const documents = await Document.find({});
    res.json(documents);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get a single document by ID
// @route   GET /api/documents/:id
// @access  Public
export const getDocumentById = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);

    if (document) {
      res.json(document);
    } else {
      res.status(404).json({ message: 'Document not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update a document
// @route   PUT /api/documents/:id
// @access  Public
export const updateDocument = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const document = await Document.findById(req.params.id);

    if (document) {
      if (req.file) {
        const result = await cloudinary.v2.uploader.upload(req.file.path, {
          resource_type: 'auto'
        });
        document.drivingLicense = result.secure_url;
      }

      document.name = name || document.name;
      document.email = email || document.email;
      document.message = message || document.message;

      const updatedDocument = await document.save();
      res.json(updatedDocument);
    } else {
      res.status(404).json({ message: 'Document not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete a document
// @route   DELETE /api/documents/:id
// @access  Public
export const deleteDocument = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);

    if (document) {
      await document.remove();
      res.json({ message: 'Document removed' });
    } else {
      res.status(404).json({ message: 'Document not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
