import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { QrCode } from "./qrcode";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qrcodegenerated" element={<QrCode />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
