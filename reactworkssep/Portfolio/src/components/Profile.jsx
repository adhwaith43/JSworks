import React from 'react'
import image from '../assets/download.jpeg'
function Profile() {
  return (
    <div class="container-fluid bg-light mt-2 p-5">
      <div class="row">
        <div class="col-6 d-flex justify-content-center align-items-center">Hello my name is Milan</div>
        <div class="col-6 d-flex justify-content-center align-items-center"><img src={image} alt="Profile" /></div>
      </div>
    </div>
  )
}

export default Profile