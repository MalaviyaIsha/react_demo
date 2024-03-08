import React from "react";
class ComponentDidMount extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "max"
    }
    console.log("constructor")
  }

  componentDidMount() {
    console.log("componentDidMount")
  }

  render() {
    console.log("render")
    return (
      <React.Fragment>
        <h1>componentDidMount:{this.state.name}</h1>
        <button onClick={() => this.setState({ name: "sofy" })}> Update Name</button>
      </React.Fragment>
    )
  }
}
export default ComponentDidMount;