import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() 
{

  const[num1,setnum1]=useState('')
  const[num2,setnum2]=useState('')
  const[num3,setnum3]=useState('')

  function add(){
    console.log('add')
  }
  function sub(){
    console.log('add')
  }
  function mul(){
    console.log('add')
  }
  function division(){
    console.log('add')
  }

  return (
    <>
      <div className="container mt-5 w-25 p-5 border border-2 rounded">
        <h1 className='text-center'>Arithmetic Calculator</h1>
        <input type="text" className="mt-3 form-control" value="" placeholder="Enter a number"/>
        <br />
        <input type="text" className="mt-3 form-control" value="" placeholder="Enter another number"/>
        <div className="mt-5 d-flex justify-content-between">
        <button className="btn btn-dark" onClick={add}>+</button>
        <button className="btn btn-primary" onClick={subtract}>-</button>
        <button className="btn btn-secondary" onClick={multiply}>*</button>
        <button className="btn btn-danger" onClick={divide}>/</button>
        </div>
        <div>
          <h4 className="mt-3 text-center">Result: {result}</h4>
        </div>
      </div>
    </>
  )
  
}

export default App
