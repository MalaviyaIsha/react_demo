import React from "react"
import Child from './Child'
const LiftingState = () => {
const parentAlert = (data) => {
  alert("Hello " + data );
}
  return (
    <React.Fragment>
      <h1>Lifting State</h1>
      <Child data = {parentAlert}/>
    </React.Fragment>
  )
}
export default LiftingState;