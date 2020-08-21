import React /*,{ Fragment } Fragment 사용시*/ from "react";

function App() {
  const name = "리액트";
  //리액트는 if문 대신 조건부 연사자를 사용해야한다
  return (
    <>
      {name === "리액트" ? <h1>리액트입니다.</h1> : <h2>리액트가 아닙니다</h2>}
    </>
  );
}
export default App;
