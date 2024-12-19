import React, { useState } from "react";

function App() {
  let currentTime = new Date().toLocaleTimeString();
  let [time, setTime] = useState(currentTime);

  function getCurrentTime() {
    let newCurrentTime = new Date().toLocaleTimeString();
    setTime(newCurrentTime);
  }
  setInterval(getCurrentTime, 1000);
  console.log(time);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getCurrentTime}>Get Time</button>
    </div>
  );
}

export default App;
