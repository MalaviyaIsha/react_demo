import React, { useMemo, useState } from "react";
const UseMemoDemo = () => {
  const [count , setCount] = useState(0);
  const [item, setItem] = useState(10);

  const multiCountMemo = useMemo( () => {
    console.log("MUL Function Call...")
    return count * 5;
  },[count])

  return(
    <React.Fragment>
      <h1>useMemo Demo</h1>
      <h2>Count : {count}</h2>
      <h2>Item : {item}</h2>
      <h2>function mul : {multiCountMemo}</h2>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <button onClick={() => setItem(item * 10)}>Item update</button>
    </React.Fragment>
  )
}
export default UseMemoDemo;