

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import "./index.css";
import NutriPageLactose from "./pages/NutriPageLactose";
import NutriPageEggs from "./pages/NutriPageEggs";
import NutriPageGluten from "./pages/NutriPageGluten";
import Connexion from "./pages/Connexion";
import Footer from "./pages/Footer";


  
    const App = () => {
      return (

    <BrowserRouter>
      <div>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/nutriPageLactose" component={NutriPageLactose} />
          <Route path="/nutriPageGluten" component={NutriPageGluten} />
          <Route path="/nutriPageEggs" component={NutriPageEggs} />
          <Route path="/contact" component={Contact} />
          <Route path="/connexion" component={Connexion} />
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
      )
      
      };


export default App;
