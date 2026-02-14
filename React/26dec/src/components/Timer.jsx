import React, { useState, useEffect } from 'react';

export default function Timer() {
  const INITIAL_TIME = 1 * 60;

  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(INITIAL_TIME);

  useEffect(() => {
    if (!isRunning || time === 0) return;

    const intervalId = setInterval(() => {
      setTime(prev => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, time]);

  function reset() {
    setIsRunning(false);
    setTime(INITIAL_TIME);
  }

  function formatWatch() {
    const mins = Math.floor(time / 60);
    const secs = time % 60;

    return `${mins < 10 ? '0' + mins : mins} : ${
      secs < 10 ? '0' + secs : secs
    }`;
  }

  return (
    <>
      <h2>{formatWatch()}</h2>

      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
