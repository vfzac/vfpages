import React, { useState, useEffect } from 'react';
import '../css/HOAI.css'; // Import your CSS file
import formatElapsedTime from 'date-fns'


const TimePassed = () => {
  const [timePassed, setTimePassed] = useState('');

  const calculateTimePassed = () => {
    const startTime = new Date('07-01-1998');
    const currentTime = new Date();
    const difference = Math.abs(currentTime - startTime);


    const milisec = Math.floor((difference % 1000));
    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24) % 365.25);
    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));

    setTimePassed(`${years}:${days}:${hours}:${minutes}:${seconds}:${milisec}`);
  };

  useEffect(() => {
    const intervalId = setInterval(calculateTimePassed, 333);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  

  return (
    <div>
      <h1 className='header-text'>How_Old_Am_I</h1>
      
      {timePassed.split('').map((digit, index) => (
        <span key={index} className='nixie-tube-lights'>{digit}</span>
      ))}
    </div>
  );
};

export default TimePassed;
