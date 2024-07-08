import React, { useEffect, useState } from "react";

export const CallbackChild = ({ getItems }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getItems());
  }, [getItems]);

  return (
    <>
      <h1>CallbackChildgggggg</h1>
      {items.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </>
  );
};
