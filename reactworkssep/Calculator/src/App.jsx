import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculator from './components/Calculator'
import About from './components/About'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <div className='container background-light mt-5 p-5 border border-2 rounded'>
      <About/>
      </div>

      <Calculator/>
      
    </>
  )
}

export default App
