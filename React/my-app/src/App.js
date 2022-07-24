import React from "react";
import "./styles/css/style.css"; //import css
import Friend from "./Friend";

//Props (properties)
//Every component in react has its own properties

const App = () => {
  let friends = [
    { name: "wunyu", age: 25, desc: "Nice" },
    { name: "emma", age: 25, desc: "Nice" },
    { name: "winnie", age: 25, desc: "Nice" },
  ];
  return (
    <div>
      <h1>{Math.random()}</h1>
      <h1>My friend:</h1>
      {friends.map((friend) => (
        <Friend name={friend.name} age={friend.age} disc={friend.desc} />
      ))}
    </div>
  );
};

export default App;
