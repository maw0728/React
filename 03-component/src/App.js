import React, { Component } from "react";

// 클래스형 컴포넌트에서는 render 함수가 꼭 있어야한다
//함수형 컴포넌트는 선언하기가 쉬운 대신 state와 라이프사이클 API의 사용이 불가능하다
class App extends Component {
  render() {
    const name = "react";
    return <div className="react">{name}</div>;
  }
}

export default App;
