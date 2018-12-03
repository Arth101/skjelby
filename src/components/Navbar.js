import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.png'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" title="Logo">
          <img src={logo} alt="skjelby" style={{ width: '88px' }} />
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/tags/resume/">
          Sessions
        </Link>
        <Link className="navbar-item" to="/about">
          Om Kampagnen
        </Link>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
