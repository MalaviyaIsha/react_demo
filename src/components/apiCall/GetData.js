import React, { useEffect, useState } from 'react'
export const GetData = () => {
  const [data , setData] = useState([])
  useEffect(() => {
    fetch('https://dummyjson.com/todos')
      .then((result) =>
        result.json()
      )
      .then((response) => {
        setData(response)
      })
  },[])
  console.log("Data::::",data)
  return (
    <div>GetData</div>
  )
}
