import React from 'react'
const ChildComponent = (props) => {
  console.log("props",props)
  return (
    <React.Fragment>
      <div>ChildComponent</div>
    </React.Fragment>
  )
}
export default React.memo(ChildComponent);
