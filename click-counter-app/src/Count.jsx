import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const LIMIT = 10;

  const increase = () => {
    setCount(prev => prev + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  };

  return (
    <div className="container">
      <h1>Click Counter</h1>
      <h2>{count}</h2>
      <div className="buttons">
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      </div>
      {count >= LIMIT && <p className="limit">You've reached the limit!</p>}
    </div>
  );
}

export default App;
