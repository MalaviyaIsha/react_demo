import React from 'react'
import { useParams } from 'react-router-dom'
export const User = () => {
  const { id, name } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Hello user no {id}</h1>
      <h1>Hello {name}</h1>
    </div>
  )
}

