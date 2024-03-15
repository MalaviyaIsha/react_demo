import React, { useContext } from 'react'
import { CounterContextCreate } from '../context/CounterContext'
export const CounterButton = () => {
  const countState = useContext(CounterContextCreate)
  return (
    <>
      <button onClick={() => countState.setCount(countState.count + 1)}>Increment</button>
      <button onClick={() => countState.setCount(countState.count - 1)}>Decrement</button>
    </>
  )
}
