import { Link } from "react-router-dom";
import logoSmall from "../assets/logo-small.svg";
import styled from "styled-components";

const QrCode = () => {
  return (
    <>
    <HeaderContainer>
      <Link to="/">
        <img src={`${logoSmall}`} alt="QRCODE's logo" />
      </Link>
    </HeaderContainer>
    <QrCodeContainer>

    </QrCodeContainer>
    </>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8rem;
`

const QrCodeContainer = styled.div`
  min-height: calc(100vh - 8rem);
`

export { QrCode };
