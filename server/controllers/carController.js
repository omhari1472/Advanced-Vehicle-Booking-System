import Car from '../models/car.js';
import cloudinary from '../config/cloudinary.js';
import { io } from '../services/socketServices.js';

// @desc    Create a new car
// @route   POST /api/cars
// @access  Public
export const createCar = async (req, res) => {
  const { carName, seats, luggage, doors, fuel, horsepower, engine, drive, type } = req.body;

  try {
    const result = await cloudinary.v2.uploader.upload(req.file.path);

    const car = new Car({
      carName,
      seats,
      luggage,
      doors,
      fuel,
      horsepower,
      engine,
      drive,
      type,
      image: result.secure_url
    });

    const createdCar = await car.save();
    res.status(201).json(createdCar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get all cars
// @route   GET /api/cars
// @access  Public
export const getCars = async (req, res) => {
  try {
    const cars = await Car.find({});
    res.json(cars);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get a single car by ID
// @route   GET /api/cars/:id
// @access  Public
export const getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);

    if (car) {
      res.json(car);
    } else {
      res.status(404).json({ message: 'Car not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update a car
// @route   PUT /api/cars/:id
// @access  Public
export const updateCar = async (req, res) => {
  const { carName, seats, luggage, doors, fuel, horsepower, engine, drive, type } = req.body;

  try {
    const car = await Car.findById(req.params.id);

    if (car) {
      if (req.file) {
        const result = await cloudinary.v2.uploader.upload(req.file.path);
        car.image = result.secure_url;
      }

      car.carName = carName || car.carName;
      car.seats = seats || car.seats;
      car.luggage = luggage || car.luggage;
      car.doors = doors || car.doors;
      car.fuel = fuel || car.fuel;
      car.horsepower = horsepower || car.horsepower;
      car.engine = engine || car.engine;
      car.drive = drive || car.drive;
      car.type = type || car.type;

      const updatedCar = await car.save();
      res.json(updatedCar);
    } else {
      res.status(404).json({ message: 'Car not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete a car
// @route   DELETE /api/cars/:id
// @access  Public
export const deleteCar = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);

    if (car) {
      await car.remove();
      res.json({ message: 'Car removed' });
    } else {
      res.status(404).json({ message: 'Car not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// Example update to handle booking


export const bookCar = async (req, res) => {
  const { id } = req.params;
  try {
    const car = await Car.findById(id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }

    if (0 < car.availability) {
      car.bookings += 1;
      car.availability -= 1; // Decrease availability
      const updatedCar = await car.save();

      // Emit socket event to notify clients about the booking
      io.emit('carUpdated', updatedCar);

      res.json(updatedCar);
    } else {
      res.status(400).json({ message: 'No available units left' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const returnCar = async (req, res) => {
  const { id } = req.params;
  try {
    const car = await Car.findById(id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }

    if (car.bookings > 0) {
      car.bookings -= 1;
      car.availability += 1; // Increase availability
      const updatedCar = await car.save();

      // Emit socket event to notify clients about the return
      io.emit('carUpdated', updatedCar);

      res.json(updatedCar);
    } else {
      res.status(400).json({ message: 'No bookings to return' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};