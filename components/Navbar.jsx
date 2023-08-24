import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    //NavLink kullanırsak gittiğimiz sayfanın class özelliğine active ekler ! 
    <nav className='mainNav' >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to='/history'>History</NavLink>
    </nav>
  )
}

export default Navbar
