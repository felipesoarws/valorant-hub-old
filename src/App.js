import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";
import Weapons from "./pages/Weapons";
import Maps from "./pages/Maps";

import DetailedAgent from "./components/DetailedAgent";
import WeaponSkins from "./components/WeaponSkins";

// carousel
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error />} />
        <Route path="/weapons" element={<Weapons />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/agents/:name/:id" element={<DetailedAgent />} />
        <Route path="/weapons/skins/:name/:id" element={<WeaponSkins />} />
      </Routes>
    </Router>
  );
}

export default App;
