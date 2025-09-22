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

    @media ( max-width: 40rem ) {
        body {
            background: url(${qaBgSmall}) no-repeat center;
            background-size: cover;
        }
    }
`

export { GlobalStyle };