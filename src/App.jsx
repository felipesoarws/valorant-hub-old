import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Error from './pages/Error';
import Agents from './pages/Agents';
import Weapons from './pages/Weapons';
import Maps from './pages/Maps';
import Ranks from './pages/Ranks';
import Regions from './pages/Regions';
import DetailedAgent from './pages/DetailedAgent';
import WeaponSkins from './pages/WeaponSkins.jsx';

// styles
import '../src/styles/reset.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/weapons" element={<Weapons />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/ranks" element={<Ranks />} />
        <Route path="/regions" element={<Regions />} />
        <Route path="/agents/:name/:id" element={<DetailedAgent />} />
        <Route path="/weapons/skins/:name/:id" element={<WeaponSkins />} />
      </Routes>
    </Router>
  );
}

export default App;
