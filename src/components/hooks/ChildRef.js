import React, { forwardRef } from "react";
const ChildRef = (props,ref) => {
  return (
    <React.Fragment>
      <input type="text" ref={ref} />
    </React.Fragment>
  )
}
export default forwardRef(ChildRef) ; 