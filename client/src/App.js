import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/me")
      .then((r) => r.json())
      .then((data) => setCount(data.key));
  }, []);

  return (
    <div className="App">
      <h1>{count}</h1>
    </div>
  );
}

export default App;
