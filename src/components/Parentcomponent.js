import React from "react";
import Childcomponent from "./Childcomponent";
const Parentcomponent = () => {
  const parentFunction = () =>{
    alert("I'm from Parent component")
  }
  return (
    <React.Fragment>
      <h1>Parent component</h1>
      <Childcomponent parentFunction = {parentFunction}/>
    </React.Fragment>
  )
}
export default Parentcomponent;