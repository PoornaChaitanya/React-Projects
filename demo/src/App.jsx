import React, { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");

  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name2;
  }, [name2]);

  function add() {
    setName2(name1);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName1(e.target.value)}
      />
      <button onClick={add}>ENTER</button>
      <h2>current name : {name2}</h2>
      <h2>previous name : {prevName.current}</h2>
    </div>
  );
}

export default App;
