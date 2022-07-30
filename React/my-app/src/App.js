import React, { useState, useEffect } from "react";
import "./styles/css/style.css";
const App = () => {
  let [name, setName] = useState("");
  const changeName = () => {
    setName("emma");
  };

  //useEffect
  useEffect(() => {
    console.log("useEffect function is invoked");
  }, [name]);
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
};

export default App;
