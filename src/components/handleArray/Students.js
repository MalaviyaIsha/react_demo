import React from "react"
const Students = (props) => {
  return (
    <React.Fragment>
      <span> {props.data.name} </span>
      <span> {props.data.email} </span>
      <span> {props.data.city} </span>
    </React.Fragment>
  )
}
export default Students;