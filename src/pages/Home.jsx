// styles
import '../styles/reset.scss';
import '../styles/home/home.scss';

// icons
import { BiUserPin } from 'react-icons/bi';
import { TbMapSearch } from 'react-icons/tb';
import { RiKnifeLine } from 'react-icons/ri';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineTrophy } from 'react-icons/ai';

// components
import Footer from '@/components/Footer';

// hooks
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

// assets
import valorantLOGO from '../assets/vlr_logo.png';
import valorantBG from '../assets/map_bg5.webp';
import DesktopMenu from '@/components/DesktopMenu';

const Home = () => {
  useEffect(() => {
    document.title = `Valorant Hub | @felipesoarws`;
  });

  const showMobileMenu = () => {
    const menuMobile = document.querySelector('.menu__mobile');

    if (menuMobile.classList[1] === 'show__menu') {
      menuMobile.classList.remove('show__menu');
    } else {
      menuMobile.classList.add('show__menu');
    }
  };

  return (
    <div>
      <div className="bg fade-out">
        <img src={valorantBG} alt="background"></img>
      </div>

      <div className="menu__mobile">
        <nav>
          <ul>
            <div className="link">
              {' '}
              <Link to="/agents">
                <BiUserPin />
                <li>Agents</li>
              </Link>
            </div>
            <div className="link">
              {' '}
              <Link to="/weapons">
                <RiKnifeLine />

                <li>Weapons</li>
              </Link>
            </div>
            <div className="link">
              {' '}
              <Link to="/maps">
                <TbMapSearch />

                <li>Maps</li>
              </Link>
            </div>
            <div className="link">
              {' '}
              <Link to="/ranks">
                <AiOutlineTrophy />

                <li>Ranks</li>
              </Link>
            </div>
          </ul>
        </nav>
      </div>

      <header className="agents__scss">
        <div className="header__menu__mobile">
          <div className="header__logo">
            <Link to="/">
              <img src={valorantLOGO} alt="logo" />
            </Link>
          </div>
          <div className="header__menu__icon" onClick={showMobileMenu}>
            <BiMenuAltRight />
          </div>
        </div>
        <div className="header__menu__desktop">
          <div className="header__logo">
            <Link to="/">
              <img src={valorantLOGO} alt="logo" />
            </Link>
          </div>
          <div className="menu__desktop">
            <DesktopMenu name="home" />
          </div>
        </div>
      </header>

      <main className="home__scss">
        <div className="main__title">
          <h1>Home</h1>
          <p>asdasdasdasd</p>
        </div>
        <div className="main__content"></div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
