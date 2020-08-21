import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      Hello <b>react</b>
    </div>
  );
}
/*
JSX를 사용하지 않고 자바스크립트로만 리액트를 만들때
function App() {
  return React.createElement(
    "div",
    null,
    "Hello ",
    React.createElement("b", null, "react")
  );
}
*/
export default App;
