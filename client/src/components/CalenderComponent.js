import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const [events, setEvents] = useState([]);

  // Example availability data for demonstration
  const initialAvailability = {
    '2024-07-15': 10, // Available vehicles for July 15, 2024 is 10
    '2024-07-16': 0, // Available vehicles for July 16, 2024 is 0 (example of zero availability)
  };

  // Function to format availability as events for the calendar
  const formatEvents = (availability) => {
    const monthStart = moment().startOf('month');
    const monthEnd = moment().endOf('month');
    const events = [];

    // Loop through each day of the month
    for (let date = moment(monthStart); date <= monthEnd; date.add(1, 'days')) {
      const formattedDate = date.format('YYYY-MM-DD');
      const availableVehicles = availability[formattedDate] || 0;

      events.push({
        title: `Available vehicles: ${availableVehicles}`,
        start: new Date(formattedDate),
        end: new Date(formattedDate),
        availableVehicles,
      });
    }

    return events;
  };

  // Initial events based on initial availability
  const initialEvents = formatEvents(initialAvailability);

  const eventStyleGetter = (event) => {
    const style = {
      backgroundColor: event.availableVehicles > 0 ? '#000' : '#cccccc', // Example background color based on availability
      color: '#fff', // Text color
      border: 'none', // Remove border
      marginTop: ''
    };
    return {
      style,
    };
  };

  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={initialEvents} // Pass initialEvents as events
        views={['month']}
        eventPropGetter={eventStyleGetter} // Apply styles based on event properties
        startAccessor="start"
        endAccessor="end"
        style={{ margin: '50px' }}
      />
    </div>
  );
};

export default CalendarComponent;
