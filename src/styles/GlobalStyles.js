import { createGlobalStyle } from "styled-components"; 
// import colors from './colors'

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    #root{
    }

    body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
    }

    ul, h2, p{
    }

    a, a:link, a:visited, a:focus, a:hover{
        color: white;
        text-decoration: none;
    }
`