import React from "react";

const Friend = ({ name, age, desc }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default Friend;
