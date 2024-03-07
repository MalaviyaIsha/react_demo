import React, { useEffect } from "react";
const UseEffectDemo = () => {
  useEffect(() => {
    console.log("useEffect")
  })
  return(
    <React.Fragment>
      <h1>UseEffect</h1>
    </React.Fragment>
  )
}
export default UseEffectDemo;