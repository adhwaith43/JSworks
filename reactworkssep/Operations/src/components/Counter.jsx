import React from 'react'

function Counter() {
  return (
    <div className='container mt-5 p-5 border border-secondary'> 
        <h3 className="text-center">Counter App</h3>
        
        <input type="text" name="" id="" className="form-control"/>
        <br />
        <div className="d-flex justify-content-evenly gap-3">
        <button className="btn btn-primary">+</button>
        <button className="btn btn-danger">-</button>
        <button className="btn btn-secondary">Reset</button>
        </div>
    </div>
  )
}

export default Counter