import { useState, useEffect } from "react";

export default function Clock(props) {
  // Store current date in state
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // Update time every second
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // Cleanup timer when component unmounts
    return () => {
      clearInterval(timerId);
    };
  });

  return (
    <>
      <p>
        {props.timeZone} :
        {date.toLocaleString("en-GB", { timeZone: `${props.timeZone}` })}
      </p>
    </>
  );
}
