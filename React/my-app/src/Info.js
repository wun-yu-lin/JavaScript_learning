import React from "react";
import Msg from "./Msg";
const Info = ({ msgs, setMsg }) => {
  return (
    <div>
      {msgs.map((msg) => (
        <Msg key={msg.id} msg={msg} setMsg={setMsg} msgs={msgs} />
      ))}
    </div>
  );
};

export default Info;
