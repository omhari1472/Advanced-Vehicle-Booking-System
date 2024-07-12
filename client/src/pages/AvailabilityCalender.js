// client/src/App.js
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

const AvailabilityCalender = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Listen for 'carUpdated' event from server
    socket.on('carUpdated', (updatedCar) => {
      // Update cars state based on the updatedCar received
      setCars((prevCars) =>
        prevCars.map((car) => (car._id === updatedCar._id ? updatedCar : car))
      );
    });

    // Fetch initial car data and render UI
    // Example: fetch cars data from backend
    fetch('http://localhost:4000/api/auth/car/')
      .then((response) => response.json())
      .then((data) => setCars(data));

    // Clean up socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <ul>
        {cars.map((car) => (
          <li key={car._id}>
            {car.carName} - Bookings: {car.bookings} - Availability: {car.availability}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailabilityCalender;
