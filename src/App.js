import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import "./index.css";
import PageLactose from "./pages/PageLactose";
import PageEggs from "./pages/PageEggs";
import PageGluten from "./pages/PageGluten";
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
          <Route path="/PageLactose" component={PageLactose} />
          <Route path="/PageGluten" component={PageGluten} />
          <Route path="/PageEggs" component={PageEggs} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Connexion" component={Connexion} />
        </Switch>
        <Footer />
    </div>
  </BrowserRouter>
  )};

export default App;
