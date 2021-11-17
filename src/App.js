
import React, { useState,useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled,{ ThemeProvider } from "styled-components";
import {lightTheme,darkTheme,GlobalStyles} from "./themes.js";
import NavBar from "./components/navbar/NavBar";
import PrivateRoute from "./components/privateroute/PrivateRoute";
import { Auth } from "./components/privateroute/Auth";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Connexion from "./pages/Connexion";
import Login from "./pages/Login";
import Footer from "./components/footer/Footer";
import "./index.css";
import NutriPage from "./pages/NutriPage";
import Toggle from "./components/toggle/Toggle.js";
import { ProductsContext } from "./context/ProductsContext.js";


const StyleApp = styled.div`
  color: ${props => props.theme.color}
`;

const App = () => {

  const {theme,setTheme,isToggled,setIsToggled} = useContext(ProductsContext);

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");

  };
  
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles/>
      
      
     
      <Toggle rounded={true} isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)}  themeToggler={ () =>themeToggler()}/>
      <StyleApp>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Connexion" component={Connexion} />
          <Route path="/NutriPage" component={NutriPage} />
        </Switch>
        <Footer />
        </StyleApp>
        </ThemeProvider>
       
    </BrowserRouter>
  )};


export default App;
