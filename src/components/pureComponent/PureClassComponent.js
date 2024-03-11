import React from "react";
class PureComponent extends React.PureComponent{
  constructor(){
    super();
    this.state = {
      count : 1
    }
  }
  render(){
    console.log("re-render")
    return(
      <React.Fragment>
        <h1>Pure Component : {this.state.count} </h1>
        <button onClick={() => this.setState({count : this.state.count + 1}) }>Count</button>
      </React.Fragment>
    )
  }
}
export default PureComponent;