import { Link, useParams } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import logoSmall from "../assets/logo-small.svg";
import loadCircleDuotone from "../assets/load_circle_duotone.svg";
import linkAlt from "../assets/link_alt.svg";
import styled from "styled-components";

const QrCode = () => {
  const { url } = useParams();

  return (
    <>
    <HeaderContainer>
      <Link to="/">
        <img src={`${logoSmall}`} alt="QRCODE's logo" />
      </Link>
    </HeaderContainer>
    <QRCodeContainer>
      <QRCodeWrapper>
        <QRCodeSVG 
          value={url} 
          size={185} 
          fgColor={"#111629"} 
          bgColor={"#F2F5F9"}
          level={"M"}
          minVersion={4}
        />
      </QRCodeWrapper>
      <ButtonsContainer>
        <button type="button">
          Download
          <img src={loadCircleDuotone} alt="Circle Duotone" />
        </button>
        <button type="button">
          Share
          <img src={linkAlt} alt="Link alt" />
        </button>
      </ButtonsContainer>
    </QRCodeContainer>
    </>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8rem;
`

const QRCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 8rem);
  margin: 2.8rem 0;
`

const QRCodeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: var(--bg-qr-code-color);
  padding: 1.75rem;
  border-radius: 1.5rem;

  &::before {
    content: '';
    position: absolute;
    background-color: var(--bg-circle-color);
    width: 19.15rem;
    height: 19.15rem;
    border-radius: 50%;
    z-index: -1;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 6rem;

  button[type="button"] {
    font-family: var(--text-font);
    font-size: 1rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .75rem;
    background-color: var(--bg-button-color);
    color: var(--text-primary-color);
    padding: 1rem 2.45rem;
    border: none;
    border-radius: .75rem;
    cursor: pointer;
    transition: all 250ms ease-in;
  }

  button[type="button"]:hover {
      background-color: var(--bg-hover-color);
  }

  @media (max-width: 40rem) {
    gap: 1rem;
  }

  @media (max-width: 30rem) {
    gap: .5rem;
  }
`

export { QrCode };
