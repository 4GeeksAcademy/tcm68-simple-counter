import React, { useState, useEffect } from 'react';
import SecondsCounter from "../component/home.jsx";

function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <SecondsCounter seconds={seconds} />;
}

export default App;