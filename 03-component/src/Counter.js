import React, { Component } from "react";

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   //state의 초기값
  //   this.state = {
  //     number: 0,
  //     fixedNumber: 0,
  //   };
  // }
  //constructor 메서드를 사용하지않고 사용하기
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          onClick={() => {
            // 콜백 함수를 등록하여 처리한다
            this.setState(
              (prevState) => {
                return { number: prevState.number + 1 };
              },
              () => {
                console.log("방금 setState가 호출되었습니다.");
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
