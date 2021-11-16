<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo-ramentafraise.png";
import "./navbar.css";
=======

import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/logo-ramentafraise.png"
import "./navbar.css"
>>>>>>> feature/karim

const NavBar = () => {

  return (
    <header>
      <section className="header-banner">
        <div className="title-logo-container">
<<<<<<< HEAD
          <img className="logo" src={logo} alt="" />
=======
        <Link to="/Home"><img className="logo" src={logo} alt=""/></Link>
>>>>>>> feature/karim
          <div className="header-title">
            <h1>GreenBeens</h1>
            <h2>"Everything you like in 1 click"</h2>
          </div>
        </div>
        <div className="button-container">
<<<<<<< HEAD
          <Link to="/Login">
            <button>Login</button>
          </Link>
          <button>MySpace</button>
        </div>
=======
            <button><Link to="/Connexion">Login</Link></button>
            <button>MySpace</button>
        </div>    
>>>>>>> feature/karim
      </section>
      <nav className="nav-general">
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Cards">Cards</Link>
          </li>
          <li>
            <Link to="/NutriPage">NutriPage</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
