import React, { useState } from "react"
const Condition = () => {
  const [login , setLogin] = useState(1)
  return(
    <div>
      {login === 1 ? <h1>Welcome user 1</h1> : login === 2 ? <h1>Welcome user 2</h1> : <h1>Welcome Guest</h1> }
    </div>
  )
}
export default Condition;