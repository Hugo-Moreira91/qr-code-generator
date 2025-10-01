import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { QrCode } from "./qrcode";
import { Footer } from "../components/Footer";

const AppRoutes = () => {
  return (
    <BrowserRouter basename="/qr-code-generator">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qr" element={<QrCode />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export { AppRoutes };
