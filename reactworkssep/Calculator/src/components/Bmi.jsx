import React from 'react'

function Bmi() {
  return (
    <div className='container tetx-center'>
        <h1><strong>BMI Calculator</strong></h1>
        <input  className='form-control' type="text" placeholder='Enter the Height in cm'/>
        <br />
        <input className='form-control'type="text" name="" id="" placeholder='Enter the weight in kg'/>
        <br />
        <button>Calculate</button>
        <h3>Your Bmi is</h3>
    </div>
  )
}

export default Bmi