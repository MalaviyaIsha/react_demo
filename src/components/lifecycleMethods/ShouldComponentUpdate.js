import React from "react";
class ShouldComponentUpdate extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate", this.state.count)
    if (this.state.count < 5) {
      return true;
    }
  }
  render() {
    console.log("render")
    return (
      <React.Fragment>
        <h1> ComponentDidUpdate : {this.state.count} </h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Update</button>
      </React.Fragment>
    )
  }
}
export default ShouldComponentUpdate;