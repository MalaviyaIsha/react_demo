import React, { useState } from "react";
const ControlledComponent = () => {
  const [val, setVal] = useState(111);
  return (
    <div>
      <h1>Controlled component</h1>
      <h1>{val}</h1>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      {/* <button onClick={updateData}>Update</button> */}
    </div>
  );
};
export default ControlledComponent;
