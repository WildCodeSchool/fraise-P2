import { createGlobalStyle } from "styled-components";
import styled,{ ThemeProvider } from "styled-components";
import {lightTheme,darkTheme,GlobalStyles} from "./themes.js";

export const lightTheme = {
    body:"white",
    fontColor:"red",
};


export const darkTheme = {
    body:"#033554",
    fontColor:'yellow',
};

export const GlobalStyles = createGlobalStyle`
    body {

        background-color:${(props) => props.theme.body}

    }

`;