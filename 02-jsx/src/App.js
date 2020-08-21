import React from "react";

function App() {
  const name = "리액트";
  // 리액트에서 DOM 요소에 스타일을 적용할때는 객체 형태로 넣어야한다
  const style = {
    //background-color는 backgroundColor와 같이 -가 사라직ㅎ 카멜 표기법으로 작성됩니다
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16, // 단위를 생략하면 px로 지정됩니다.
  };
  return <div style={style}>{name}</div>;
}
export default App;
