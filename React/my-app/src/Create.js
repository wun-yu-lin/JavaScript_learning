import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Create = ({ msgs, setMsg }) => {
  let [input, setInput] = useState("");

  const submithandler = (e) => {
    e.preventDefault();
    setMsg([...msgs, { input, id: uuidv4() }]); //串接array 建立物件 input&UUID
    setInput("");
  };

  const inputhandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <form>
      <input onChange={inputhandler} value={input} type="text" />
      <button onClick={submithandler}>Submit</button>
    </form>
  );
};

export default Create;
