import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo-ramentafraise.png";
import Auth from "../../contexte/Auth";
import "./navbar.css";
import { logout } from "../../services/AuthApi";
import { ProductsContext } from "../../context/ProductsContext";


const NavBar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
  const { handleClickHome } = useContext(ProductsContext)

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
  };

  return (
    <header>
      <section className="header-banner">
        <div className="title-logo-container">
          <Link to="/Home" onClick={handleClickHome}>
            <img className="logo" src={logo} alt="" />
          </Link>

          <div className="header-title">
            <h1>GreenBeens</h1>
            <h2>"Everything you like in 1 click"</h2>
          </div>
        </div>
        <div className="">
          {(!isAuthenticated && (
            <>
            <div className="button-container">
              <Link to="/Login" style={{ textDecoration: 'none' }} >
                <button >Login</button>
              </Link>
              <Link to="/Connexion" style={{ textDecoration: 'none' }} >
                <button>Inscription</button>
              </Link>
              </div>
            </>
          )) || (
            <>

            
            <div className="button-container">
            <button> My Space </button>
              <Link to="/Home" style={{ textDecoration: 'none' }} >
                <button onClick={handleLogout}>Logout</button>
              </Link>
              </div>
              <p className="button-container welcom-user">{`Welcome ${isAuthenticated}`}</p>
              

            </>
          )}
        </div>
      </section>
      <nav className="nav-general">
        <ul>
          <Link to="/Home" onClick={handleClickHome}>Home</Link>

          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;
