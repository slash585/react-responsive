import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./navbar.css"

function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  const closeMobileMenu = () => setClick(false)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TRVL <i className="fab fa-typo3"></i>
          </Link>

          <div className="menu-icon">
            <i
              onClick={handleClick}
              className={click ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav menu"}>
            <li className="nav-item">
              <Link onClick={closeMobileMenu} className="nav-links" to="/">
                Home
              </Link>

              <Link
                onClick={closeMobileMenu}
                className="nav-links"
                to="/services"
              >
                Services
              </Link>

              <Link
                onClick={closeMobileMenu}
                className="nav-links"
                to="/products"
              >
                Products
              </Link>

              <Link
                onClick={closeMobileMenu}
                className="nav-links"
                to="/signup"
              >
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
