import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Service from './Components/Service'
import Footer from './Components/Footer'
import Error from './Components/Error'
import Signin from './Components/Signin'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
         <Route path="/" element={<Home />} >Home</Route>
         <Route path="/about" element={<About />}>About</Route>
         <Route path="/contact" element={<Contact />} >Contact</Route>
         <Route path="/services" element={<Service />} >Services</Route>
         <Route path="/signin/:username" element={<Signin />}></Route>
         <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
