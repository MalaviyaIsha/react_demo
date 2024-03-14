import React, { useState } from 'react'

export const CounterContextCreate = React.createContext(null);

export const CounterProvider = (props) => {
  const [count , setCount] = useState(0)
  return(
    <CounterContextCreate.Provider value={{ count, setCount}}>
      {props.children}
    </CounterContextCreate.Provider>
  )
}
