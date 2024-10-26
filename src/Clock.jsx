import { useState, useEffect } from "react";

function Clock({ timeZone }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    hour12: false,
    timeZone,
  });
  const minutes = time.toLocaleTimeString("en-US", {
    minute: "numeric",
    timeZone,
  });
  const seconds = time.toLocaleTimeString("en-US", {
    second: "numeric",
    timeZone,
  });

  const hourDegrees = (hours % 12) * 30 + minutes / 2;
  const minuteDegrees = minutes * 6;
  const secondDegrees = seconds * 6;

  return (
    <div className="clock-container">
      <div className="clock-circle">
        <div
          className="clock-hands hour-hand"
          style={{ transform: `rotate(${hourDegrees}deg)` }}
        ></div>
        <div
          className="clock-hands minute-hand"
          style={{ transform: `rotate(${minuteDegrees}deg)` }}
        ></div>
        <div
          className="clock-hands second-hand"
          style={{ transform: `rotate(${secondDegrees}deg)` }}
        ></div>
      </div>
      <h3 className="timezone-label">
        {timeZone} - {hours}:{minutes}:{seconds}
      </h3>
    </div>
  );
}

export default Clock;
