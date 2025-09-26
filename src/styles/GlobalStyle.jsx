import { createGlobalStyle } from "styled-components";
import qaBg from "../assets/qa-bg.jpg";
import qaBgSmall from "../assets/qa-bg-small.jpg";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: var(--text-font);
        min-height: 100vh;
        background: url(${qaBg}) no-repeat center;
        background-size: cover;
    }

    a {
        text-decoration: none;
    }

    p {
        margin: 0;
    }

    button {
        font-family: var(--text-font);
        font-weight: 400;
        font-size: 1rem;
        background-color: var(--bg-button-color);
        color: var(--text-primary-color);
        border: none;
        border-radius: .75rem;
        cursor: pointer;
        transition: all 250ms ease-in;
    }

    button:hover {
        background-color: var(--bg-hover-color);
    }

    @media ( max-width: 40rem ) {
        body {
            background: url(${qaBgSmall}) no-repeat center;
            background-size: cover;
        }
    }
`;

export { GlobalStyle };
