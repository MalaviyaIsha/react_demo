import React from "react";
const Childcomponent = (props) => {
  return (
    <React.Fragment>
      <h1>Child component</h1>
      <button onClick={props.parentFunction}>Child button</button>
    </React.Fragment>
  )
}
export default Childcomponent;