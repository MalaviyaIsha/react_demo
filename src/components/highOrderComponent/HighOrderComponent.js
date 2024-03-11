import React, { useState } from "react";
const HighOrderComponent = () => {
  return (
    <React.Fragment>
      <h1>Demo</h1>
      <HOCRed hoc={Counter} />
      <HOCGreen hoc={Counter} />
    </React.Fragment>
  );
};

const HOCRed = (props) => {
  return (
    <h2 style={{backgroundColor:"yellow"}}>
      <props.hoc />
    </h2>
  );
};

const HOCGreen = (props) => {
  return (
    <h2 style={{ backgroundColor: "green" }}>
      <props.hoc />
    </h2>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <React.Fragment>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Counter</button>
    </React.Fragment>
  );
};
export default HighOrderComponent;
