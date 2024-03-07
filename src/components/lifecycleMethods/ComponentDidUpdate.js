import React from "react";
class ComponentDidUpdate extends React.Component {
  componentWillUnmount(){
    alert("ComponentWillUnmount")
  }
  constructor() {
    super();
    this.state = {
      count: 0
    }
    console.log("constructor")
  }

  componentDidUpdate(preProps, preState) {
    console.log("componentDidUpdate", preState.count, this.state.count)
    // if (preState.count === this.state.count) {
    //   alert("values are diffrent");
    // }
    if (this.state.count < 10) {
      this.setState({ count: this.state.count + 1 })
    }
  }
  render() {
    console.log("render")
    return (
      <React.Fragment>
        <h1> ComponentDidUpdate : {this.state.count} </h1>
        <button onClick={() => this.setState({ count: 1 })}>Update</button>
      </React.Fragment>
    )
  }
}
export default ComponentDidUpdate;