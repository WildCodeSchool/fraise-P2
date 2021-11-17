import { createGlobalStyle } from "styled-components";
import styled,{ ThemeProvider } from "styled-components";
import {lightTheme,darkTheme,GlobalStyles} from "./themes.js";

export const lightTheme = {
    body:"white",
    color: 'black',
};


export const darkTheme = {
    body:"#033554",
    color: 'white',
};

export const GlobalStyles = createGlobalStyle`
    body {

        background-color:${(props) => props.theme.body};
        color: ${props => props.theme.color};
       
        

    }

   

`;