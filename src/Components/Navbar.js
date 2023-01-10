import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
     <div class="container-fluid">
    <NavLink to="/"><img src="../images/logo.png" class="logo" alt="" /></NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <NavLink className="act" to="/">
            <li class="nav-item nav-link"> Home</li>
        </NavLink>
        <NavLink className="act" to="/about">
            <li class="nav-item nav-link"> About</li>
        </NavLink>
        <NavLink className="act" to="/contact">
            <li class="nav-item nav-link"> Contact</li>
        </NavLink>
        <NavLink className="act" to="/services">
            <li class="nav-item nav-link"> Services</li>
        </NavLink>
        <NavLink className="act" to="/signin">
            <li class="btn btn-primary">SignIn</li>
        </NavLink>
     </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
