import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import { Route, Routes } from 'react-router-dom'
import { PageNotFound } from './PageNotFound'

const RoutesDemo = () => {
  return (
    <React.Fragment>
      <Navbar />
      
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} exact={true} />
        <Route path="*" element={<PageNotFound />} exact={true} />
      </Routes>
    </React.Fragment>
  )
}

export default RoutesDemo
