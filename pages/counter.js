import React from 'react';
import Counter from '../components/Counter.js';
import styles from '../styles/counter.module.css';

export default function CounterPage() {
  return (
    <div className={styles.container}>
      <h1>Lab Activity Counter</h1>
      <Counter />
    </div>
  );
}