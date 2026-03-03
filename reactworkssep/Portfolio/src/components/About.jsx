import React from 'react'

function About() {
  return (
    <div>
      <h1 class="text-center mt-5">Full Stack Developer</h1>
      <p class="text-center mt-3">I am a full stack developer 
        with experience in building web applications using React,
         Node.js, and MongoDB. I have a strong background in JavaScript 
         and I am passionate about learning new technologies and improving 
         my skills.</p>
      <div class="container-fluid bg-light mt-5 p-5">
        <div class="col-6">
                <div> Name : Milan</div>
                <div> Age : 30</div>
                <div> Location : New York</div>
        </div>
        <div class="col-6">
           <div> Email : milan@example.com</div>
           <div>Gender= Male</div>
           <div>Phone: 123-456-7890</div>
        </div>
      </div>
    </div>
  )
}

export default About