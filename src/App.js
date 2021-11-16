import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PageLactose from "./pages/PageLactose";
import PageEggs from "./pages/PageEggs";
import PageGluten from "./pages/PageGluten";
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
    <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
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
            <Route path="/Login" component={Login} />
            <Route path="/Connexion" component={Connexion} />
            <AuthenticatedRoute path="/Login" component={Login} />
            <AuthenticatedRoute path="/Home" component={Home} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </Auth.Provider>
  );
};

export default App;
