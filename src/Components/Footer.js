import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div class="card text-center">
        <div class="card-body bg-dark text-light py-4">
            <h5 class="card-title">Developed by ELETUTECH</h5>
            <p class="card-text">&copy; ELETUTECH 2023</p>
            <NavLink to="/"><button className="btn btn-primary">Home Page</button></NavLink>
        </div>
     </div>
    </div>
  )
}

export default Footer
