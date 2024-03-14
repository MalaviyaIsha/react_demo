import React, { useCallback, useState } from 'react'
import { CallbackChild } from './CallbackChild';
export const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  
  const getItems = useCallback(() => {
    console.log(data + 1, data - 1)
    return [data + 1, data - 1]
  },[data])

  return (
    <>
      <div>UseCallback</div>
      <button onClick={() => setCount(count + 1)}>Count : {count} </button>
      <button onClick={() => setData(data + 1)}>Data : {data} </button>
      <CallbackChild getItems={getItems} />
    </>
  )
}
