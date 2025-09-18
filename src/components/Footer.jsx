import styled from "styled-components";

const Footer = () => {
    return (
        <FooterContainer>
            Coded by 
            <a href="https://github.com/Hugo-Moreira91" target="_blank">
                Hugo César
            </a> | Challenge by
            <a href="https://www.devchallenges.io?ref=challenge" target="_blank">
                devChallenges.io
            </a>.
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
`

export { Footer };