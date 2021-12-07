import React from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import '../../styles/navbar.css'
import back from '../../img/back.png'

const Navbar = ({ title, showBackButton }) => {
  const navigate = useNavigate ()

  return (
    <nav>
      {showBackButton &&
        <button className="back-button" onClick={() => navigate(-1)}>
          <img className="back-icon" src={back} alt={'Back button'}/>
        </button>
      }
      <Link className="navbar-brand" to="/">{title}</Link>
    </nav>
  )
}

export default Navbar
