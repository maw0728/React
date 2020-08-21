import React from "react";
import "./App.css";

function App() {
  const name = "리액트";
  // JSX는 태그를 닫지 않으면 오류가 발생한다
  return (
    <>
      <div className="react">{name}</div>
      <input />
    </>
  );
}
export default App;
