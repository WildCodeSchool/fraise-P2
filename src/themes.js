import { createGlobalStyle } from "styled-components";


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