// HOAI.js

import React, { useState } from 'react';

const HOAI = () => {
  // Define state variables using useState hook
  const [count, setCount] = useState(0);

  // Event handler to increment count
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>useState Example</h2>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default HOAI;
