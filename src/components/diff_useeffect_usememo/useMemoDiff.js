import React, { useMemo, useState } from "react";
const UseMemoDiff = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState("");

  const noRender = useMemo(() => {
    console.log("usememo call...")
    return (<div>
      <h1 style={{ color: "red" }}>useMemo Diff</h1>
      <h2 style={{ color: "red" }}>Count : {count}</h2>
      <h2>Item : {item}</h2>
    </div>) 
  }, [item])

  return (
    <React.Fragment>
      {noRender}
      <button onClick={() => setCount(count + 1)}>Count</button>
      <button onClick={() => setItem("peter")}>Name</button>
      <h1>useMemo Diff</h1>
      <h2>Count : {count}</h2>
     

    </React.Fragment>
  )
}
export default UseMemoDiff;