import React, { useEffect, useState } from "react";

const UseEffectDiff = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState("");
  const [memoizedComponent, setMemoizedComponent] = useState(null);

  useEffect(() => {
    console.log("Effect Function Call...");
    const memoizedComponent = (
      <div>
        <h1 style={{ color: "red" }}>useEffect Diff</h1>
        <h2 style={{ color: "red" }}>Count : {count}</h2>
        <h2>Item : {item}</h2>
      </div>
    );
    setMemoizedComponent(memoizedComponent);
  }, [count, item]);

  return (
    <React.Fragment>
      {memoizedComponent}
      <button onClick={() => setCount(count + 1)}>Count</button>
      <button onClick={() => setItem("peter")}>Name</button>
      <h1>useEffect Diff</h1>
      <h2>Count : {count}</h2>
    </React.Fragment>
  );
};

export default UseEffectDiff;
