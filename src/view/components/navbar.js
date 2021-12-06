import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ title }) => {
  return (
    <nav>
      <Link className="navbar-brand" to="/">{title}</Link>
    </nav>
  )
}

export default Navbar
