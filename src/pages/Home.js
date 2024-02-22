import React, { useState, useEffect } from 'react';

const Home = () => {
  // Example 1: Simple counter
  const [count, setCount] = useState(0);

  // Example 2: Object state
  const [person, setPerson] = useState({ name: '', age: 0 });

  // Example 3: Array state
  const [todos, setTodos] = useState([]);

  // Example 4: Boolean state
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Example 5: Function state
  const [randomNumber, setRandomNumber] = useState(() => Math.random());

  // Example 6: Reset state
  const resetState = () => {
    setCount(0);
    setPerson({ name: '', age: 0 });
    setTodos([]);
    setIsDarkMode(false);
    setRandomNumber(Math.random());
  };

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <h1>useState/useState Examples</h1>

      {/* Example 1: Simple counter */}
      <div>
        <h2>Counter</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>

      {/* Example 2: Object state */}
      <div>
        <h2>Person</h2>
        <input
          type="text"
          placeholder="Name"
          value={person.name}
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Age"
          value={person.age}
          onChange={(e) => setPerson({ ...person, age: parseInt(e.target.value) || 0 })}
        />
        <p>Name: {person.name}</p>
        <p>Age: {person.age}</p>
      </div>

      {/* Example 3: Array state */}
      <div>
        <h2>Todos</h2>
        <input
          type="text"
          placeholder="Add todo"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setTodos([...todos, e.target.value]);
              e.target.value = '';
            }
          }}
        />
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>

      {/* Example 4: Boolean state */}
      <div>
        <h2>Dark Mode</h2>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle Dark Mode</button>
        <p>Dark Mode: {isDarkMode ? 'On' : 'Off'}</p>
      </div>

      {/* Example 5: Function state */}
      <div>
        <h2>Random Number</h2>
        <p>Random Number: {randomNumber}</p>
        <button onClick={() => setRandomNumber(Math.random())}>Generate Random Number</button>
      </div>

      {/* Example 6: Reset state */}
      <div>
        <h2>Reset State</h2>
        <button onClick={resetState}>Reset All</button>
      </div>
    </div>
  );
};

export default Home;
