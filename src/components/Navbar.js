import React from 'react'
import { Link } from 'gatsby'
import dndBeyondLogo from '../img/dnd-beyond--small.png'
import logo from '../img/logo.png'

var state = {
  isActive: false,
}

var toggleNav = () => {
  this.setState(prevState => ({
    isActive: !prevState.isActive
  }))
}

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" title="Logo">
          <img src={logo} alt="skjelby" style={{ width: '88px' }} />
        </Link>
        <a role="button" class="navbar-burger burger" onClick={this.toggleNav} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
        <div className="navbar-start">
          <Link className="navbar-item" to="/tags/resume/">
            Sessions
          </Link>
          <Link className="navbar-item" to="/about">
            Level progression
          </Link>
        </div>
        <div className="navbar-end">
          <a
            className="navbar-item"
            href="https://www.dndbeyond.com/campaigns/152997"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <img src={dndBeyondLogo} alt="dnd beyond" />
            </span>
          </a>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
