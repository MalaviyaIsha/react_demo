import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

export const ReactMemo = () => {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(1)
  return (
    <React.Fragment>
      <h1>ReactMemo</h1>
      <ChildComponent data={data} />
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </React.Fragment>
  )
}
