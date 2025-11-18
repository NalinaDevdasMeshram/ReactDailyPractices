import { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter_app">
      <h1>Count Down Timer</h1>
      <div className="btn">
        <button onClick={() => setCount(count + 1)}>+</button>
        <p>{count}</p>
        <button onClick={() => setCount(count - 1 < 0 ? 0 : count - 1)}>
          -
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
