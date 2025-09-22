import styled from "styled-components";

const Footer = () => {
    return (
        <FooterContainer>
            <p>
            Coded by <a href="https://github.com/Hugo-Moreira91" target="_blank">Hugo Moreira </a> 
            | Challenge by <a href="https://www.devchallenges.io?ref=challenge" target="_blank">devChallenges.io</a>.
            </p>
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        color: var(--text-primary-color);
    }

    a {
        color: var(--link-color);
        transition: color 250ms ease-in;
    }

    a:hover {
        color: var(--text-primary-color);
    }

    @media ( max-width: 40rem ) {
        font-size: .85rem;
    }
`

export { Footer };