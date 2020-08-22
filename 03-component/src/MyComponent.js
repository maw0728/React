import React from "react";
import PropTypes from "prop-types";

const MyComponent = ({ name, children }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {children}
      입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};
// prop 검증 props 타입이 일치하지 않을경우 값은 출력되지만 브라우저 콘솔창에 경고메시지 출력
MyComponent.propTypes = {
  name: PropTypes.string,
};

export default MyComponent;
