import React, { useState, useEffect } from 'react';
import '../css/HOAI.css'; // Import your CSS file


const TimePassed = () => {
  const [startDate, setStartDate] = useState('');
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

    setTimePassed(`${years} years, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds, ${milisec} miliseconds`);
  };

  useEffect(() => {
    const intervalId = setInterval(calculateTimePassed, 333);

    return () => {
      clearInterval(intervalId);
    };
  }, [startDate]);

  const handleInputChange = (e) => {
    setStartDate(e.target.value);
    setTimePassed('');
  };

  return (
    <div>
      <h1 style={{color:'white'}}>How_Old_Am_I</h1>
      {timePassed && <p>^{startDate} {timePassed}</p>}
    </div>
  );
};

export default TimePassed;
