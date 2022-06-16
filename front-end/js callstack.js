//callstack p1
function one() {
  console.log("run one");
  two();
  function two() {
    console.log("run two");
    three();
    function three() {
      console.log("run three");
    }
  }
  console.log("Code Done");
}

one();

//callback p2
function one() {
  console.log("run one");
  two();
}

function two() {
  console.log("run two");
  three();
}

function three() {
  console.log("run three");
}

one();
