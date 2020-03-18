import React from "react"
import "../../assets/stylesheets/main.css"
import { Link, NavLink } from "react-router-dom";


const Header = (props) => {
  return (
    <div>
      <link href="https://fonts.googleapis.com/css2?family=Baloo+Chettan+2:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <header className="header">
        <nav className="nav-bar flex-between wrapper">
          <NavLink to="/" className="logo" href="#"><h1>conduit</h1></NavLink>
          {props.isLoggedIn ? (<ul className="flex-between">

            <NavLink to="/" className="nav-bar__menu-item">Home</NavLink>

            <NavLink to="/newpost" className="nav-bar__menu-item">New Post</NavLink>

            <NavLink to="/setting" className="nav-bar__menu-item">Settings</NavLink>

            <NavLink to="/profile" className="nav-bar__menu-item">Profile</NavLink>

          </ul>) : (<ul className="flex-between">

            <NavLink to="/" className="nav-bar__menu-item">Home</NavLink>

            <NavLink to="/login" className="nav-bar__menu-item">Sign in</NavLink>

            <NavLink to="/signup" className="nav-bar__menu-item">Sign up</NavLink>
          </ul>)
          }
        </nav>
      </header>
    </div>
  )
}

export default Header