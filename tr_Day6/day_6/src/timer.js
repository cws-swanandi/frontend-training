import React, { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => { setCount((prevCount) => prevCount + 1);}, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div id="timer" className="timer">
      <h3>Timer: {count} seconds</h3>
    </div>
  );
}
export default Timer;