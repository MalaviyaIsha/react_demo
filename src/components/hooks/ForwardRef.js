import React, { useRef } from "react";
import ChildRef from "./ChildRef";
const ForwardRefDemo = () => {
  let inputRef = useRef(null)
  const handleInput = () => {
    console.log("fuction call")
    inputRef.current.value = "1000"
    inputRef.current.style.color = "red"
    inputRef.current.focus()
  }
  return (
    <React.Fragment>
      <h1> Parent UseRef</h1>
      <ChildRef ref={inputRef} />
      <button onClick={handleInput}>Click</button>
    </React.Fragment>
  )
}
export default ForwardRefDemo