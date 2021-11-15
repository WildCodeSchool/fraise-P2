import React,{useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled,{ ThemeProvider } from "styled-components";
import {lightTheme,darkTheme,GlobalStyles} from "./themes.js";
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
import Toggle from "./components/toggle/Toggle.js";


const StyleApp = styled.div`
  color: ${props => props.theme.fontColor}

`;

const App = () => {
  const [theme,setTheme] = useState("dark");
  const [isToggled,setIsToggled] = useState(false)

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");

  };
  

  return (
    <BrowserRouter>

      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <StyleApp>
      <Toggle rounded={true} isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)}  themeToggler={ () =>themeToggler()}/>
      </StyleApp>
      </ThemeProvider>
     
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
