import React from "react"
import "../../assets/stylesheets/main.css"
import { Link, NavLink } from "react-router-dom";


class Header extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <link href="https://fonts.googleapis.com/css2?family=Baloo+Chettan+2:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <header className="header">
          <nav className="nav-bar flex-between wrapper">
            <NavLink to="/" className="logo" href="#"><h1>conduit</h1></NavLink>
            <ul className="flex-between">

              <NavLink activeClassName="selected" to="/" className="nav-bar__menu-item">Home</NavLink>

              <NavLink to="/login" className="nav-bar__menu-item">Sign in</NavLink>

              <NavLink to="/signup" className="nav-bar__menu-item">Sign up</NavLink>
            </ul>
          </nav>
        </header>
      </div>
    )
  }
}

export default Header