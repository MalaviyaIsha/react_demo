import React from "react";
import ComponentDidUpdate from "./ComponentDidUpdate";
class ComponentWillUnmount extends React.Component{
  constructor(){
    super();
    this.state = {
      show : true
    }
  }
  render(){
    return(
      <React.Fragment>
        {
          this.state.show ? <ComponentDidUpdate/> : null
        }
        <h1>ComponentWillUnmount</h1>
        <button onClick={() => this.setState({show : !this.state.show})}>Toggle</button>
      </React.Fragment>
    )
  }
}
export default ComponentWillUnmount;