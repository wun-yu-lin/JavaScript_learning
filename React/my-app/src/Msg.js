import React from "react";

const msg = ({ msg, msgs, setMsg }) => {
  const deleteHandler = () => {
    setMsg(msgs.filter((m) => m.id !== msg.id));
  };
  return (
    <div className="msg">
      <p>{msg.input}</p>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default msg;
