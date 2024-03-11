import React, { createRef } from "react";
class RefClassComponent extends React.Component {
  constructor() {
    super();
    this.inputRef = createRef()
  } 

  getVal() {
    console.warn(this.inputRef.current.value)
    this.inputRef.current.style.color = "red"
    this.inputRef.current.style.backgroundColor = "grey"
  }

  render() {
    return (
      <div>
        <h1>Ref in class component</h1>
        <input type="text" ref={this.inputRef}></input>
        <button onClick={() => this.getVal()}>Check Ref</button>
      </div>
    )
  }
}
export default RefClassComponent;