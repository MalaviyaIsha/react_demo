import React, { useEffect, useState } from "react";

const nums = new Array(30_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 29_000_000,
  };
});

const UseEffectList = () => {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState(nums);
  const [magical, setMagical] = useState(null);
  //const magical = numbers.find((item) => item.isMagical === true )
  useEffect(() => {
    console.log("useEffect")
    setMagical(numbers.find((item) => item.isMagical === true)) 
  }, [numbers]);

  return (
    <React.Fragment>
      <h1>useMemo Demo</h1>
      <h2>Magical number is : {magical ? magical.index : null}</h2>
      <h2>Count : {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
          if (count === 10) {
            setNumbers(
              new Array(10_000_000).fill(0).map((_, i) => {
                return {
                  index: i,
                  isMagical: i === 9_000_000,
                };
              })
            );
          }
        }}
      >
        Count
      </button>
    </React.Fragment>
  );
};
export default UseEffectList;
