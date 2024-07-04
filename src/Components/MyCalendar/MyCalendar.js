import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Meeting',
      start: new Date(2024, 6, 4, 10, 0),
      end: new Date(2024, 6, 4, 12, 0),
    },
    {
      id: 2,
      title: 'Lunch',
      start: new Date(2024, 6, 5, 12, 0),
      end: new Date(2024, 6, 5, 13, 0),
    },
  ]);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name');
    if (title) {
      const newEvent = {
        id: events.length + 1,
        title,
        start,
        end,
      };
      setEvents([...events, newEvent]);
    }
  };

  const handleDeleteEvent = (event) => {
    const updatedEvents = events.filter((e) => e.id !== event.id);
    setEvents(updatedEvents);
  };

  return (
    <div style={{ height: '800px', marginTop: '4rem' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelect}
        onSelectEvent={event => handleDeleteEvent(event)}
      />
    </div>
  );
};

export default MyCalendar;
