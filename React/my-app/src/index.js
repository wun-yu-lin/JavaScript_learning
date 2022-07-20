// const React = require("react");
// const ReactDOM = require("react-dom");
//ES6
import React from "react";
import ReactDOM from "react-dom";

// function App() {
//   return React.createElement("div", null, [
//     React.createElement("h1", { style: { color: "red" } }, "Myprofile"), //css setting
//     React.createElement("h1", null, "Myprofile1"),
//     React.createElement("h1", null, "Myprofile2"),
//   ]);
// }

//jsx
function App() {
  return (
    //
    <div>
      <h1>My profile</h1>
      <p>My name is wunyu</p>
      <button>Check my profile</button>
    </div>
  );
}

ReactDOM.render(App(), document.querySelector("#root"));
