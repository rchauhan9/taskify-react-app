import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from '../GoogleAuth'

const NavBar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Taskify</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav navbar-right ml-auto">
          <Link className="nav-item nav-link active" to="/">Home</Link>
          <Link className="nav-item nav-link" to="/my-tasks">My Tasks</Link>
          <GoogleAuth />
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
