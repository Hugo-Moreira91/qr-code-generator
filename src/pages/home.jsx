import styled from "styled-components";
import logo from "../assets/logo.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import isUrlHttp from "is-url-http";

const Home = () => {
  const [url, setUrl] = useState("");
  const [urlError, setUrlError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!url.trim()) {
      setUrlError(null);
    }
  }, [url]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUrlError(null);

    const urlNormalized = url.trim();

    const checkUrl = isUrlHttp(urlNormalized);

    console.log(checkUrl)

    if(checkUrl) {
      navigate("/qr");
    } else {
      setUrlError('URL is not valid');
    }
  };

  return (
    <HomeContainer>
      <img src={`${logo}`} alt="QRCODE's logo" />
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Enter an url"
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
        <button type="submit">QR code</button>
      </form>
      {urlError && <span>{urlError}</span>}
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .35rem;
    background-color: var(--bg-form-color);
    border: .15rem solid var(--border-form-color);
    border-radius: 1rem;
    padding: .35rem;
    margin-top: 2rem;

    input[type="text"] {
      font-family: var(--text-font);
      font-weight: 400;
      font-size: 1rem;
      width: 25.5rem;
      padding: .25rem 1.5rem;
      background-color: var(--bg-input-color);
      color: var(--text-primary-color);
      border: none;
    }

    input[type="text"]:focus {
      outline: none;
      border: .1rem solid var(--border-input-color);
      border-radius: .425rem;
    }

    input[type="text"]::placeholder {
      font-weight: 400;
      font-size: 1rem;
      color: var(--text-primary-color);
    }

    button[type="submit"] {
      font-family: var(--text-font);
      font-weight: 400;
      font-size: 1rem;
      letter-spacing: .005rem;
      width: 8.75rem;
      height: 3.25rem;
      background-color: var(--bg-button-color);
      color: var(--text-primary-color);
      border: none;
      border-radius: .85rem;
      cursor: pointer;
      transition: all 250ms ease-in;
    }

    button[type="submit"]:hover {
      background-color: var(--bg-hover-color);
    }
  }

  span {
    font-size: .85rem;
    font-style: italic;
    margin-top: .15rem;
    color: var(--text-error-color);
  }

  @media ( max-width: 40rem ) {
    form {
      max-width: 92.5vw;
    }
  }
`

export { Home };
