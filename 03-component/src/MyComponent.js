import React from "react";

const MyComponent = (props) => {
  return <div>안녕하세요, 제 이름은 {props.name}입니다</div>;
};

// 기본값을 설정하기
MyComponent.defaultProps = {
  name: "기본 이름",
};

export default MyComponent;
