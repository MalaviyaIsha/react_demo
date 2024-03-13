import React from "react";
import Counter1 from "./Conter";
const Button = ({ count, incrementHandler }) => {
  return (
    <button onClick={incrementHandler}>Click {count}</button>
  )
}

export default Counter1(Button);