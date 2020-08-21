import React from "react";

function App() {
  const name = undefined;
  // 잘못된예시
  // return name; 함수에서 undefined만 반환하여 렌더링 하면 안 된다

  // 작동가능한 예시
  // return name || "값이 undefined입니다"; OR 연산자를 이용하여 값이 undfined때 사용할 값을 지정해주면 된다
  // return <div>{name}</div>; JSX 내부에서 undefined를 렌더링하는 것은 괜찮습니다
  return <div>{name || "리액트"}</div>; // name 값이 undefined일 때 보여 주고 싶은 문구가 있을때
}
export default App;
