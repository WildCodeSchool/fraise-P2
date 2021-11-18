
import React, { useState,useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled,{ ThemeProvider } from "styled-components";
import {lightTheme,darkTheme,GlobalStyles} from "./themes.js";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import Connexion from "./pages/Connexion";
import Login from "./pages/Login";
import Footer from "./components/footer/Footer";
import { hasAuthenticated } from "./services/AuthApi";
import Auth from "./contexte/Auth";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import "./index.css";
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
  
  return (
    <Auth.Provider value={{ isAuthenticated, setIsAuthenticated}}>
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Home" component={Home} />
            
            <Route path="/Contact" component={Contact} />
            <Route path="/Login" component={Login} />
            <Route path="/Connexion" component={Connexion} />
            <AuthenticatedRoute path="/Home" component={Home} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </Auth.Provider>
  );
};

export default App;
