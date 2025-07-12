import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"


const Navbar = () => {
  return (
    <div>
       <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand fw-bold" href="index.html">LapZone</a>
      <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navMenu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><Link class="nav-link active" to='/'>Home</Link></li>
          <li class="nav-item"><Link class="nav-link" to='/pro'>Products</Link></li>
          <li class="nav-item"><Link class="nav-link" to='/cart'>Cart</Link></li>
          <li class="nav-item"><Link class="nav-link" to='/contact'>Contact</Link></li>
          <li class="nav-item"><Link class="nav-link" to='/register'>Register</Link></li>
           <li class="nav-item"><Link class="nav-link" to='/profile'>Profile</Link></li>
        </ul>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default Navbar
