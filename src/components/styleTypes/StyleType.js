import React from "react";
import './style.css';
import style from './custom.module.css'
import {Button} from 'react-bootstrap'
const StyleType = () =>{
  return(
    <React.Fragment>
      <h1 className="primary"> Style 1 : With seperate css file  </h1>
      <h1 style={{backgroundColor: "black" , color : "lightgreen" , padding : "15px"}}> Style 2 : With Inline css</h1>
      <h1 className={style.success}> Style 3 : With seperate css file  </h1>
      <Button variant="info" onClick={() => alert("Bootstrap button")}>Bootstrap button</Button>
    </React.Fragment>
  )
}
export default StyleType;