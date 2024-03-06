import React, { useState } from "react"
const Condition = () => {
  const [login , setLogin] = useState(true)
  return(
    <div>
      {login ? <h1>Welcome Max</h1> : <h1>Welcome Guest</h1>}
    </div>
  )
}
export default Condition;