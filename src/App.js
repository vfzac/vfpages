import React from 'react';
import RadialMenu from './pages/RadialMenu'; // Import the RadialMenu component
import './App.css';

const App = () => {
  const handleOptionClick = (option) => {
    // Do something with the selected option, e.g., navigate to a different page
    console.log('Selected option:', option);
  };
  return (
    <div className="App">
    <RadialMenu onOptionClick={handleOptionClick} />
    </div>
  );
};

export default App;
