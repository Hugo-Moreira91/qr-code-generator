import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { QrCode } from "./qrcode";
import { Footer } from "../components/Footer";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qrcodegenerated" element={<QrCode />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export { AppRoutes };
