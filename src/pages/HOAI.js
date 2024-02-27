import React, { useState, useEffect } from 'react';
import '../css/HOAI.css'; // Import your CSS file
import { differenceInMilliseconds, differenceInMonths } from 'date-fns';



const TimePassed = () => {
  const [timePassed, setTimePassed] = useState('');

  const calculateTimePassed = () => {
    const secondsInMs = 1000;
    const minutesInMs = secondsInMs * 60;
    const hoursInMs = minutesInMs * 60;
    const daysInMs = hoursInMs * 24;
    const monthsInMs = daysInMs * (365.25 / 12);
    const yearsInMs = daysInMs * 365.25;

    let startTime = new Date('1998-07-01T00:00:00');
    const currentTime = new Date();
    const differenceInMs = differenceInMilliseconds(currentTime, startTime); // Difference in milliseconds
    let tempdif = differenceInMs;
    const years = Math.floor(Math.abs(tempdif / yearsInMs));
    tempdif %= yearsInMs;
    const months = Math.floor(Math.abs(tempdif / monthsInMs));
    tempdif %= monthsInMs;
    const days = Math.floor(Math.abs(tempdif / daysInMs));
    tempdif %= daysInMs;
    const hours = Math.floor(Math.abs(tempdif / hoursInMs));
    tempdif %= hoursInMs;
    const minutes = Math.floor(Math.abs(tempdif / minutesInMs));
    tempdif %= minutesInMs;
    const seconds = Math.floor(Math.abs(tempdif / secondsInMs));
    const milliseconds = Math.abs(differenceInMs % 1000);
    
    const formattedDifference = `
      ${years.toString()}:${months.toString().padStart(2, '0')}:${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
    
    setTimePassed(formattedDifference);
    //setTimePassed(`${years}:${months}:${days}:${hours}:${minutes}:${seconds}:${milisec}`);
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
      <h1 className='header-text'>How_Old_Am_I</h1>
    </div>
  );
};

export default TimePassed;
