import React, { useEffect, useRef } from 'react'
export const ChildProp = (props) => {
  const prevoiusValue = useRef();
  useEffect(() => {
    prevoiusValue.current = props.count;
  }, [])
  const lastValue = prevoiusValue.current;
  return (
    <>
      <h1>Child component</h1>
      <h2>Current value : {props.count}</h2>
      <h3>Previous Value : {lastValue}</h3>
      <h3>Diffrence : {props.count - lastValue}</h3>
    </>
  )
}
