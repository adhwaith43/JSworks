import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Calculator from './components/Calculator'
import About from './components/About'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      {/* <Navbar/>
      <About/>
      <Calculator/> */}
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
