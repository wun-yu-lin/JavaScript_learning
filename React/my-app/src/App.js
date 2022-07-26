import React, { useState } from "react";
//Hooks => useRef, uselocation, useEffect, useState
const App = () => {
  //state
  //[state名稱, function名稱]  function用來改變state
  let [name, setName] = useState("Wunyu"); //useState設定預設state
  const changeNameHandler = () => {
    setName("emma");
  };
  return (
    <div>
      <h1 id="myName">{name}</h1>
      <button onClick={changeNameHandler}>ChangeName</button>
      <p>{name}</p>
      <p>{name}</p>
      <p>{name}</p>
      <p>{name}</p>
      <p>{name}</p>
      <p>{name}</p>
      <p>{name}</p>
      <p>{name}</p>
      <p>{name}</p>
      <p>{name}</p>
      <p>{name}</p>
      <p>{name}</p>
    </div>
  );
};

export default App;
