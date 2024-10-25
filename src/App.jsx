import { useState } from "react";

import "./App.css";
import HelloWorld from "./HelloWorld";
import Clock from "./Clock";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HelloWorld />
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>

      <Clock timeZone="Europe/Paris" />
      <Clock timeZone="Europe/London" />
      <Clock timeZone="Singapore" />
    </>
  );
}

export default App;
