import React, { useMemo, useState } from "react";
const UseMemoPractice = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const multiCountMemo = useMemo(() => {
    console.log("MUL Function Call...")
    return count + text;
  }, [count,text])

  return (
    <React.Fragment>
      <h1>useMemo Demo</h1>
      <h2>Count : {count}</h2>
      <h2>Item : {text}</h2>
      <h2>function mul : {multiCountMemo}</h2>
      <button onClick={() => setCount(count)}>Count</button>
     <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text" />
    </React.Fragment>
  )
}
export default UseMemoPractice;