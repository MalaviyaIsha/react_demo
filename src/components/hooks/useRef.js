import React, { useRef } from "react";
const UseRefDemo = () => {
  let inputRef = useRef(null)
  const handleInput = () =>{
    console.log("fuction call")
    inputRef.current.value = "1000"
    inputRef.current.style.color = "red"
    inputRef.current.focus()
    inputRef.current.style.display = "none"
  }
  return(
    <React.Fragment>
      <h1>UseRef</h1>
      <input type="text" ref={inputRef}/>
      <button onClick={handleInput}>Click</button>
    </React.Fragment>
  )
}
export default UseRefDemo