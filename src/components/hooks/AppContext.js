import React from 'react'
import { CommonContext } from './CommonContext'

export const AppContext = () => {
  return (
    <>
      <CommonContext.Provider>
        <div>AppContext</div>
      </CommonContext.Provider>
    </>
  )
}
