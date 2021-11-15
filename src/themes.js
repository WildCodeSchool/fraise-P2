import { createGlobalStyle } from "styled-components";
import styled,{ ThemeProvider } from "styled-components";
import {lightTheme,darkTheme,GlobalStyles} from "./themes.js";

export const lightTheme = {
    body:"#86E3D5",
    fontColor:'yellow'
};


export const darkTheme = {
    body:"#DCF9ED",
    fontColor:"red",
};

export const GlobalStyles = createGlobalStyle`
    body {

        background-color:${(props) => props.theme.body}

    }

`;