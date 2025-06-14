import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count has been updated to: ${count}`);
  }, [count]); // count değiştiğinde useEffect çalışır

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setCount(count - 1)}>decrement</button>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </header>
    </div>
  );
}

export default App;
