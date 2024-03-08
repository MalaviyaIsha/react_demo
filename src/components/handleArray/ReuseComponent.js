import React from "react";
import Students from "./Students";
const ReuseComponent = () => {
  //const students = ['Max' , 'Sofy' , 'Sam' , "Peter"];
  const students = [
    { name: "Max", email: "Max@test.com", city: "Surat" },
    { name: "Sam", email: "Sam@test.com", city: "Ahemdabad" },
    { name: "Peter", email: "Peter@test.com", city: "Surat" }
  ];
  return (
    <React.Fragment>
      <h1>Reuse Component</h1>
          {
            students.map((item, index) =>
                <h1 key={index}>
                <Students data = {item}/>
                </h1>
            )
          }
    </React.Fragment>
  )
}
export default ReuseComponent; 