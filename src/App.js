import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Connexion from "./pages/Connexion";
import Footer from "./components/footer/Footer";
import "./index.css";
import PageEggs from "./pages/PageEggs";
import PageGluten from "./pages/PageGluten";
import NutriPage from "./pages/NutriPage";
import PageLactose from "./pages/PageLactose";

  
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/PageLactose" component={PageLactose} />
          <Route path="/PageGluten" component={PageGluten} />
          <Route path="/PageEggs" component={PageEggs} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Connexion" component={Connexion} />
          <Route path="/NutriPage" component={NutriPage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )};

export default App;
