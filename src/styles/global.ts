import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: #333333;
        color: #EEEEEE;
        -webkit-font-smoothing: antialiased;
    }

    body, button {
        font-weight: 600;
    }
    input {
        font-weight: 500;
    }
    body, input, button {
        font-family: 'Mukta Mahee', serif;
        font-size: 18px;
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: 300;
    }

    h1 {
        font-size: 64px;
    }
    h2 {
        font-size: 48px;
    }
    h3 {
        font-size: 28px;
        font-weight: 500;
    }

    button {
        cursor: pointer;
    }
`;