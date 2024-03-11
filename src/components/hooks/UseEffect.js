import React, { useEffect, useState } from "react";
const UseEffectDemo = () => {
  const [count, setCount] = useState(20)
  const [data, setData] = useState(10)
  useEffect(() => {
    console.log("useEffect with Data")
  }, [data])
  useEffect(() => {
    console.log("useEffect with Count")
  }, [count])
  return (
    <React.Fragment>
      <h1>UseEffect : {count} </h1>
      <button onClick={() => setCount(count + 1)}>Count Update</button>
      <h1>UseEffect : {data} </h1>
      <button onClick={() => setData(data + 1)}>Data Update</button>
    </React.Fragment>
  )
}
export default UseEffectDemo;