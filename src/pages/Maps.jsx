// scss
import '../styles/reset.scss';
import '../styles/maps/maps.scss';

// icons
import { BiUserPin } from 'react-icons/bi';
import { TbMapSearch } from 'react-icons/tb';
import { RiKnifeLine } from 'react-icons/ri';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineTrophy } from 'react-icons/ai';

// hooks
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// assets
import valorantLOGO from '../assets/vlr_logo.png';
import valorantBG2 from '../assets/map_bg1.webp';
import Footer from '@/components/Footer';
import DesktopMenu from '@/components/DesktopMenu';

export default function Maps() {
  const [maps, setMaps] = useState([]);
  useEffect(() => {
    document.title = `Valorant Hub | Maps`;

    fetch('https://valorant-api.com/v1/maps')
      .then((res) => res.json())
      .then((data) => setMaps(data.data));
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
    <div className="App">
      <div className="bg fade-out">
        <img src={valorantBG2} alt="background"></img>
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
            <div className="link selected">
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

      <header>
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
            <DesktopMenu name="maps" />
          </div>
        </div>
      </header>
      <main className="maps__scss">
        <div className="main__title">
          <h1>Maps</h1>
          <p>Discover and learn more about the valorant maps!</p>
        </div>
        <div className="main__maps">
          {maps.map((i, index) => (
            <div className="main__map" key={index}>
              <div className="main__map__bg">
                <img src={i.splash} alt="" />

                <div className="main__map__icon">
                  <img src={i.displayIcon} alt="" />
                </div>
              </div>

              <div className="main__map__small__bg">
                <img src={i.listViewIcon} alt="" />

                <div className="main__map__title">
                  <h1>{i.displayName}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
