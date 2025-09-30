import { Link, useLocation, useNavigate } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import logoSmall from "../assets/logo-small.svg";
import loadCircleDuotone from "../assets/load_circle_duotone.svg";
import linkAlt from "../assets/link_alt.svg";
import styled from "styled-components";

const QrCode = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const url = location.state?.url;

  if (!url) {
    return (
      <NoUrlContainer>
        <p>No url provided</p>
        <button type="button" onClick={() => navigate("/")}>Back</button>
      </NoUrlContainer>
    );
  }

  const handleDownload = () => {
    const svg = document.querySelector("#qrcode");
    
    if (!svg) {
      alert("SVG not found!");
      return;
    }

    const svgData = new XMLSerializer().serializeToString(svg);

    const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const urlBlob = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = urlBlob;
    link.download = "qrcode.svg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(urlBlob);
  };

  const handleShare = async (url) => {
    const svg = document.getElementById("qrcode");

    if (!svg) {
      alert("No SVG found!");
      return;
    }

    try {
      const serializer = new XMLSerializer().serializeToString(svg);

      const blob = new Blob([serializer], { type: "image/svg+xml" });
      const file = new File([blob], "qrcode.svg", { type: "image/svg+xml" });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: "QR Code generated",
          text: "See the attached QR Code",
          files: [file],
        });
        return;
      }
    } catch (error) {
      console.error("Error sharing image:", error);
    };

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Link for QR Code generated",
          text: "Here's the link:",
          url: url,
        });
        return;
      } catch (error) {
        console.error("Error sharing link:", error);
      }
    } else {
      alert("Sharing not supported in this browser. Try another one.");
    }
  };

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
          id="qrcode"
          value={url} 
          size={185} 
          fgColor={"#111629"} 
          bgColor={"#F2F5F9"}
          level={"M"}
          minVersion={4}
        />
      </QRCodeWrapper>
      <ButtonsContainer>
        <button type="button" onClick={handleDownload}>
          Download
          <img src={loadCircleDuotone} alt="Circle Duotone" />
        </button>
        <button type="button" onClick={() => handleShare(url)}>
          Share
          <img src={linkAlt} alt="Link alt" />
        </button>
      </ButtonsContainer>
    </QRCodeContainer>
    </>
  );
};

const NoUrlContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding-top: 4rem;

  p {
    color: var(--text-primary-color);
  }

  button[type="button"] {
    padding: .5rem 1rem;
  }
`

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
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .75rem;
    padding: 1rem 2.45rem;
  }

  @media (max-width: 40rem) {
    gap: 1rem;
  }

  @media (max-width: 30rem) {
    gap: .5rem;
  }
`

export { QrCode };
