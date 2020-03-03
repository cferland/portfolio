import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1><Link to="/">Corey Ferland</Link></h1>
      <div className="title">
        <h3 className="left-title">Web Developer</h3>
        <h3 className="center-title">Solutions Engineer</h3>
        <h3 className="right-title">Digital Marketing</h3>
      </div>
      <nav>
        <span className="red"><Link to="/">About</Link></span>
        <span className="yellow"><Link to="/projects">Projects</Link></span>
        <span className="green"><Link to="/resume">Resumé</Link></span>
        <span className="blue"><Link to="/contact">Contact</Link></span>
      </nav>
    </header>
  )
}

export default Header;