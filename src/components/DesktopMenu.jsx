import '../styles/reset.scss';

// icons
import { BiUserPin } from 'react-icons/bi';
import { TbMapSearch } from 'react-icons/tb';
import { RiKnifeLine } from 'react-icons/ri';
import { AiOutlineTrophy } from 'react-icons/ai';
import { FiHome } from 'react-icons/fi';
import { BiWorld } from 'react-icons/bi';

// hooks
import { Link } from 'react-router-dom';

const DesktopMenu = ({ name }) => {
  return (
    <nav>
      <ul>
        <div className={`link ${name == 'home' ? 'selected' : ''}`}>
          {' '}
          <Link to="/">
            <FiHome />
            <li>Home</li>
          </Link>
        </div>
        <div className={`link ${name == 'agents' ? 'selected' : ''}`}>
          {' '}
          <Link to="/agents">
            <BiUserPin />
            <li>Agents</li>
          </Link>
        </div>
        <div className={`link ${name == 'regions' ? 'selected' : ''}`}>
          {' '}
          <Link to="/regions">
            <BiWorld />
            <li>Regions</li>
          </Link>
        </div>
        <div className={`link ${name == 'weapons' ? 'selected' : ''}`}>
          {' '}
          <Link to="/weapons">
            <RiKnifeLine />

            <li>Weapons</li>
          </Link>
        </div>
        <div className={`link ${name == 'maps' ? 'selected' : ''}`}>
          {' '}
          <Link to="/maps">
            <TbMapSearch />

            <li>Maps</li>
          </Link>
        </div>
        <div className={`link ${name == 'ranks' ? 'selected' : ''}`}>
          {' '}
          <Link to="/ranks">
            <AiOutlineTrophy />

            <li>Ranks</li>
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default DesktopMenu;
