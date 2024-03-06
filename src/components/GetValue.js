import React, { useState } from "react"
const GetValue = () => {
  const [data, setData] = useState(null)
  const [inputValue, setinputValue] = useState(false);
  function getData(val) {
    setData(val.target.value)
    setinputValue(false)
  }
  return (
    <div>
      {
        inputValue ? <h1>{data}</h1> : null
      }
      <input type="text" onChange={getData} />
      <button onClick={() => setinputValue(true)}> print</button>
    </div>
  )
}
export default GetValue;