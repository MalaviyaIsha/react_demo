import React, { useContext } from 'react'
import { CounterButton } from './CounterButton'
import { CounterContextCreate } from '../context/CounterContext'
export const AppContext = () => {
  const counterState = useContext(CounterContextCreate)
  console.log(counterState)
  return (
   <>
      <h1>AppContext</h1>
      <h1>Count is : {counterState.count}</h1>
      <CounterButton /><br />
      <CounterButton /><br />
      <CounterButton />
   </>

  )
}
