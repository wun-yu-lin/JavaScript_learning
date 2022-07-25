import React from "react";

//event handling 1
const buttonHandler1 = () => {
  let date = new Date().toLocaleDateString();
  alert(date);
};

//event handling 2
const buttonHandler2 = (msg) => {
  alert(msg);
};

//app.js
// .addEventLister()

const App = () => {
  return (
    <div>
      <form action="">
        <input type="text" />
        {/* button 加上 onClick後面加上 event handling 的 function */}
        <button onClick={buttonHandler1}>Submit</button>
      </form>

      <br />
      {/* 透過arrow function避免JS中，直接代入parameter時，function會直接執行的情況 */}
      <form action="">
        <input type="text" />
        <button
          onClick={() => {
            buttonHandler2("Hello");
          }}
        >
          Alart hello
        </button>
      </form>
    </div>
  );
};

export default App;
