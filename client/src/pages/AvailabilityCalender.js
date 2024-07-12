// AvailabilityCalendar.js
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';

const AvailabilityCalendar = ({ carId }) => {
  const [availability, setAvailability] = useState([]);

  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        const response = await axios.get(`/api/cars/${carId}/availability`);
        setAvailability(response.data);
      } catch (error) {
        console.error('Error fetching availability', error);
      }
    };

    fetchAvailability();
  }, [carId]);

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const isAvailable = availability.some(
        (slot) => new Date(slot.start) <= date && date <= new Date(slot.end)
      );
      return isAvailable ? <div className="available"></div> : <div className="unavailable"></div>;
    }
  };

  return (
    <div>
      <h2>Availability Calendar</h2>
      <Calendar tileContent={tileContent} />
    </div>
  );
};

export default AvailabilityCalendar;
