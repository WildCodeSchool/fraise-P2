import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo-ramentafraise.png";
import Auth from "../../contexte/Auth";
import "./navbar.css";
import { logout } from "../../services/AuthApi";
import {user} from "../../pages/Login"

const NavBar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Auth);

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
  };

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
          {(!isAuthenticated && (
            <>
              <Link to="/Login">
                <button>Login</button>
              </Link>
              <Link to="/Connexion">
                <button>Inscription</button>
              </Link>
            </>
          )) || (
            <>
            <h4> {`Bienvenue ${user}`} </h4>
            <button> My Space </button>
              <Link to="/Home">
                <button onClick={handleLogout}>Logout</button>
              </Link>
              
            </>
          )}
        </div>
      </section>
      <nav className="nav-general">
        <ul>
          
            <Link to="/Home">Home</Link>
          
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          
        </ul>
      </nav>
    </header>
   
  );
};
export default NavBar;
