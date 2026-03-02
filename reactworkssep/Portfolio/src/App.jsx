import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Education from './components/Education'

function App() {
  const [count, setCount] = useState(0)

  console.log("Count: ", count)

  const handleCount = () => {
    setCount(count + 1)
  }

  return (
    <>
    <button onClick={handleCount}> + </button>
    <div>{count}</div>
      {/* <Navbar/>
      <Profile/>
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
      <Footer/> */}

    </>
  )
}

export default App
