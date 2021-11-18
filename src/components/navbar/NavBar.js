
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/logo-ramentafraise.png"
import "./navbar.css"

import styled from "styled-components";

const StyleApp = styled.header`
  color: ${props => props.theme.color}
`;


const NavBar = () => {

  return (
   
    <header>
      <section className="header-banner">
        <div className="title-logo-container">

        <Link to="/Home"><img className="logo" src={logo} alt=""/></Link>

          <div className="header-title">
            <h1>GreenBeens</h1>
            <h2>"Everything you like in 1 click"</h2>
          </div>
        </div>
        <div className="button-container">

            <button><Link to="/Connexion">Login</Link></button>
            <button>MySpace</button>
        </div>    

      </section>
      <nav className="nav-general">
        <ul>
          <StyleApp>
            <Link to="/Home">Home</Link>
          </StyleApp>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          
        </ul>
      </nav>
    </header>
   
  );
};

export default NavBar;
