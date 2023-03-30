import { createGlobalStyle } from "styled-components"; 
// import colors from './colors'

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    #root{
        height: 100%;
    }

    body {
        font-family: 'Roboto', sans-serif;
        height: 100vh;
        margin: 0;
    }

    ul, h2, p{
    }

    a, a:link, a:visited, a:focus, a:hover {
        color: white;
        text-decoration: none;
    }
`