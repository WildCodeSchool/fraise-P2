import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png"


const NavBar = () => {
  return (
    
      <>
      <div className="login">

        <div className="logo-title">
          <img className="logo" src={logo} alt=""/>

          <div>
          <h2 className="title">GreenBeens</h2>
          <h2 className="slogan">"Everything you like in 1 click"</h2>
          </div>

        </div> 
            <div className="button-container">
            <div className="button">
            <button>Login</button>

          </div>
            <div className="button">
            <button>MySpace</button>
          </div>
        </div>
           
        </div>

        <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/NutriPageEggs">NutripageEggs</Link>
          </li>
          <li>
            <Link to="/NutriPageGluten">NutripageGluten</Link>
          </li>
          <li>
            <Link to="/NutriPageLactose">NutripageLactose</Link>
          </li>
          <li>
          <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Cards">cards</Link>
          </li>
        </ul>

    
      </nav>
    </>
  
  );
};

export default NavBar;