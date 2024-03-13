import React, { useState } from "react";
const Counter = (WrapperComponent) => {

  const Counter1 = () => {
    const [count, setCount] = useState(0);

    const incrementHandler = () => {
      setCount(count+1)
    }

    return(
      <WrapperComponent count={count} incrementHandler={incrementHandler}/>
    )
  }
  return Counter1;

}
export default Counter;