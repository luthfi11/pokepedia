import React from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import '../../styles/navbar.css'
import back from '../../img/back.png'
import star from '../../img/star-outline.png'

const Navbar = ({ title, showBackButton, showSavedIcon }) => {
  const navigate = useNavigate ()

  return (
    <nav>
      <div className="nav-wrapper">
        {showBackButton &&
          <button className="back-button" onClick={() => navigate(-1)}>
            <img className="back-icon" src={back} alt={'Back button'}/>
          </button>
        }
        <Link className="navbar-brand" to="/">{title}</Link>
      </div>
      {showSavedIcon &&
        <Link className="star-button" to="/saved">
          <img className="star-icon" src={star} alt={'Saved button'}/>
        </Link>
      }
    </nav>
  )
}

export default Navbar
