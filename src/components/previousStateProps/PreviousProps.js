import React, { useState } from 'react'
import { ChildProp } from './ChildProp'

export const PreviousProps = () => {
  const [count, setCount] = useState(1)
  return (
    <>
      <h1> PreviousProps Example </h1>
      <ChildProp count = {count}/>
      <button onClick={() => setCount(Math.floor(Math.random()*10))}>Count</button>
    </>
  )
}
