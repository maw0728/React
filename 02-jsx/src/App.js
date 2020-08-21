import React from "react";

function App() {
  const name = "뤼액트";
  return (
    /*
    null을 렌더링하면 아무것도 보여 주지 않습니다
    <>
      {name === "리액트" ? <h1>리액트입니다.</h1> : null}
    </>
    */
    // 리액트에서 false를 렌더링할 때는 null과 마찬가지로 아무것도 나타내지 않는다
    <>{name === "리액트" && <h1>리액트입니다.</h1>}</>
  );
}
export default App;
