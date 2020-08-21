import React /*,{ Fragment } Fragment 사용시*/ from "react";

function App() {
  return (
    // 컴포넌트에 여러 요소가 있으면 반드시 부모 요소 하나로 감싸야 한다
    <div>
      <h1>리액트 안녕</h1>
      <h2>잘 작동하니?</h2>
    </div>
    /*
    리액트 v16 이상부터 div 대신 Fragment를 사용할수있다
    <Fragment>
      <h1>리액트 안녕</h1>
      <h2>잘 작동하니?</h2>
    </Fragment>
    */
  );
}
export default App;
