import React, { useState, useEffect } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);
  }, []);

  return <div>My Timer {counter}</div>;
};

export default App;
