import React, { useState } from "react";

export const PostData = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const addUser = () => {
    let data = { name, email, mobile };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      })
      .then((result) =>
        result.json()
      )
      .then((response) => {
        console.log("response:", response)
      })
  };

  return (
    <React.Fragment>
      <h1>PostData</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        value={mobile}
        onChange={(e) => {
          setMobile(e.target.value);
        }}
      />
      <br />
      <button onClick={addUser}>Submit</button>
    </React.Fragment>
  );
};
