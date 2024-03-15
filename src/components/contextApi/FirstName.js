import React, { useContext } from "react";
import { FirstNameCreate, LastNameCreate } from "../context/FirstNameContext";

export const FirstName = () => {
  const fname = useContext(FirstNameCreate)
  const lname = useContext(LastNameCreate)
  return (
    <>
      <h1>UserName : {fname} {lname} </h1>
      <FirstNameCreate.Consumer>
        {(fname) => {
          return (
            <LastNameCreate.Consumer>
              {(lname) => {
                return <h1>UserName : {fname} {lname} </h1>;
              }}
            </LastNameCreate.Consumer>
          )
        }}
      </FirstNameCreate.Consumer>
    </>
  );
};
