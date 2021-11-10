import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import PrivateRoute from "./components/privateroute/PrivateRoute";
import { Auth } from "./components/privateroute/Auth";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import "./index.css";
import PageLactose from "./pages/PageLactose";
import PageEggs from "./pages/PageEggs";
import PageGluten from "./pages/PageGluten";
import Connexion from "./pages/Connexion";
import Login from "./pages/Login";
import Footer from "./components/footer/Footer";

const App = (props) => {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <Auth.Provider
      value={{ authTokens, setAuthTokens: setTokens }}
    ></Auth.Provider>
  );
};
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
        <Route path="/Login" component={Login} />
        <Route path="/PrivateRoute" component={PrivateRoute} />

        <Route path="/Connexion" component={Connexion} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
