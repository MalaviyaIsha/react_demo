import React, { useRef } from "react";
const UncontrolledComponent = () => {
  let inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    let input = document.getElementById("input3").value
    console.log("input field 3 value", input);
  };
  return (
    <div>
      <h1>Uncontrolled component</h1>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" />
        <input type="text" />
        <input type="text" id="input3" />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default UncontrolledComponent;
