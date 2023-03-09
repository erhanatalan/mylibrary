//create global styles
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: "Shantell Sans", cursive;
        font-family: 'Just Another Hand', cursive;
    }
    body{
        font-size:1.2rem;
        background-color: ${({theme})=> theme.colors.colorTurq}
    }

`





