import React from "react"
const ChildComponent = (props) => {
  const name = "max"
  return (
    <React.Fragment>
      <h1>Child</h1>
      <button onClick={() => props.data(name)}>Call</button>
    </React.Fragment>
  )
}
export default ChildComponent;