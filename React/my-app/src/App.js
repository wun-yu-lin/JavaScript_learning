import React, { useState } from "react";
import Create from "./Create";
import Info from "./Info";
import "./styles/css/style.css";
const App = () => {
  let [msgs, setMsg] = useState([]);
  return (
    <div>
      <Create msgs={msgs} setMsg={setMsg} />
      <Info msgs={msgs} setMsg={setMsg} />
    </div>
  );
};

export default App;
