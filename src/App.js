

import React, { useState,useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled,{ ThemeProvider } from "styled-components";
import { ThemeProvider } from "styled-components";
import {lightTheme,darkTheme,GlobalStyles,theme} from "./themes.js";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Toggle, {isToggled, themeToggler, setIsToggled} from "./components/toggle/Toggle";
import Connexion from "./pages/Connexion";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Footer from "./components/footer/Footer";
import { hasAuthenticated } from "./services/AuthApi";
import Auth from "./contexte/Auth";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import "./index.css";

import { ProductsContext } from "./context/ProductsContext.js";


const StyleApp = styled.div`
  color: ${props => props.theme.color}
`;

const App = () => {

  const {theme,setTheme,isToggled,setIsToggled} = useContext(ProductsContext);

  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());

  const contextTest = useContext(ProductsContext);
  console.log(contextTest)
  
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");

  };
  
  return (
    <Auth.Provider value={{ isAuthenticated, setIsAuthenticated}}>
    <BrowserRouter>
    
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <Toggle rounded={true} isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)}  themeToggler={ () =>themeToggler()}/>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Connexion" component={Connexion} />
          <Route path="/Login" component={Login} />
          <AuthenticatedRoute path="/Home" component={Home} />
          
        </Switch>
        <Footer />
        
        </ThemeProvider>
        
    </BrowserRouter>
    </Auth.Provider>
  )};


export default App;

