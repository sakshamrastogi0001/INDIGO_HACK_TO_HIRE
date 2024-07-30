import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FlightStatus = () => {
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    const fetchFlightStatus = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/flight-status');
        setStatus(response.data);
      } catch (error) {
        setStatus('Error fetching flight status');
      }
    };

    fetchFlightStatus();
  }, []);

  return (
    <div>
      <h2>Flight Status</h2>
      <p>Flight: {status.flight}</p>
      <p>Status: {status.status}</p>
      <p>Gate: {status.gate}</p>
    </div>
  );
};

export default FlightStatus;
