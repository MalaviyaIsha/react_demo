import React , {Component} from "react";
class Propsclass extends Component{
  render(){
    return(
      <div>
        <h1>Prop using class component</h1>
        <h3>{this.props.name}</h3>
      </div>
    )
  }
}
export default Propsclass;