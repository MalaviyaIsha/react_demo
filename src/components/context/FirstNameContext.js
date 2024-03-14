import React, { createContext } from 'react'
import { FirstName } from '../contextApi/FirstName';
export const FirstNameCreate = createContext();
export const LastNameCreate = createContext();

export const FirstNameContext = () => {

  return (
    <>
      <FirstNameCreate.Provider value={"John"}>
        <LastNameCreate.Provider value={"Doi"}>
          <FirstName />
        </LastNameCreate.Provider>
      </FirstNameCreate.Provider>
    </>
  )
}