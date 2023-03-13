import { useState, useEffect } from "react";

export default function Timer() {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleReset = () => {
    setCounter(0);
    setIsRunning(false);
  };

  useEffect(() => {
    if (isRunning) {
      const timerId = setTimeout(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
      return () => {
        clearTimeout(timerId);
      };
    }
  });

  return (
    <>
      <h1>Timer</h1>
      <h2>
        {counter < 60 ? "0" : Math.floor(counter / 60)} mins{" "}
        {counter < 60 ? counter : counter % 60} secs
      </h2>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>

      <button onClick={() => handleReset()}>Reset</button>
    </>
  );
}
