import React from "react";
const PassFunctionProps = (props) =>{
  return(
    <React.Fragment>
      <h1>hello</h1>
      <button onClick={() => props.data()}>Pass Function</button>
    </React.Fragment>
  )
}
export default PassFunctionProps;
