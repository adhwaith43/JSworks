import React from 'react'
import { useState } from 'react'

function Bmi() {
    const[height,setheight]=useState('')
    const[weight,setweight]=useState('')
    const[result,setResult]=useState('')

    function input1(event){
      setheight(event.target.value)
    }

    function input2(event){
      setweight(event.target.value)
    }

    function bmical(){
        setResult((height/100)/(weight**2))
    }
  return (
    <div className='container text-center mt-5'>
    <div className="row justify-content-center">
        <div className="col-md-4">
            <h1><strong>BMI Calculator</strong></h1>
            <input className='form-control mb-3' type="number" placeholder='Height (cm)' onChange={input1}/>
            <input className='form-control mb-3' type="number" placeholder='Weight (kg)' onChange={input2}/>
            <button className="btn btn-primary w-100" onClick={bmical}>Calculate</button>
            <h3 className="mt-4">Your BMI is: {result}</h3>
        </div>
    </div>
</div>

  )
}

export default Bmi