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
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
            // 두 번 사용해도 버튼을 누르면 1씩증가한다
            // this.setState({ number: number + 1 });
            // this.setState({ number: this.state.number + 1 });
            // 이렇게 하면 두번씩오른다
            this.setState((prevState) => {
              return { number: prevState.number + 1 };
            });
            this.setState((prevState) => {
              return { number: prevState.number + 1 };
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
