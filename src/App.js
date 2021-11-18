import React, { useState, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { lightTheme, darkTheme, GlobalStyles, theme } from "./themes.js";
import Toggle, {
  isToggled,
  themeToggler,
  setIsToggled,
} from "./components/toggle/Toggle";
import Connexion from "./pages/Connexion";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Footer from "./components/footer/Footer";
import { hasAuthenticated } from "./services/AuthApi";
import Auth from "./contexte/Auth";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import "./index.css";
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());

  return (
    <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Toggle
          rounded={true}
          isToggled={isToggled}
          onToggle={() => setIsToggled(!isToggled)}
          themeToggler={() => themeToggler()}
        />
        <BrowserRouter>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Home" component={Home} />

              <Route path="/Contact" component={Contact} />
              <Route path="/Login" component={Login} />
              <Route path="/Connexion" component={Connexion} />
              <Route path="/Profile" component={Profile} />
              <AuthenticatedRoute path="/Home" component={Home} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </Auth.Provider>
  );
};

export default App;
