import React, { useState } from "react";
const State = () => {
  const [name, setName] = useState("maxx");
  function updateData() {
    return (
      setName("sofy")
    )
  }
  return (
    <div>
      <h1>
        {name}
      </h1>
      <button onClick={updateData}>Update</button>
    </div>
  )
}
export default State;