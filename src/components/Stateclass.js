import React from "react";
class Stateclass extends React.Component {
  constructor() {
    super();
    this.state = {
      data: 1
    }
  }
  greet() {
    this.setState({ data: this.state.data + 1  })
  }
  render() {
    return (
      <div>
        <h1>{this.state.data}</h1>
        <button onClick={() => this.greet()}>Update data</button>
      </div>
    )
  }
}
export default Stateclass;