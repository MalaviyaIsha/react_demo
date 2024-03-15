import React, { useState } from 'react'

export const PreviousState = () => {
  const [count, setCount] = useState(1)
  const updateCounter = () => {
    let random = Math.floor(Math.random() * 10)
    setCount((pre) => {
      console.log(pre)
      if(pre < 5){
        alert("Low value")
      }
      return random;
    })
    for (let i = 0; i < 5; i++) {
      setCount((pre) => pre + 1)
    }
  }
  return (
    <>
      <h1> PreviousState Example </h1>
      <h1> {count} </h1>
      <button onClick={updateCounter}>Count</button>
    </>
  )
}
