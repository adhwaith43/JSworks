import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Calculator from './components/Calculator'
import About from './components/About'
import Navbar from './components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
      {/* <Navbar/>
      <Home/>
      <About/>
      <Calculator/> */}

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/calculator" element={<Calculator/>}></Route>
      </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
