import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;

    }

    :root{
        --background: #1C2128;
        --background-card: #282F39;
        --font: #ADBAC7;
        --button:#347D39;
        --button_hover:#209B28;
    }

    h1,h2,h3,p{
        color: var(--font)
    }

    a{
        color: blueviolet;
    }

    #root{
        min-height: 100vh;

        background-color: var(--background);
    }


`;
