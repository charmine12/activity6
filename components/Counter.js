
import React, { useState } from 'react';
import styles from '../styles/counter.module.css';
export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className={styles.container}>
      <h1>Cₒᵤ𝚗𝚝ₑᵣ</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}