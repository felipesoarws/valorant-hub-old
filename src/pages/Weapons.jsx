// scss
import '../styles/weapons/weapons.scss';
import '../styles/reset.scss';

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
import valorantBG3 from '../assets/map_bg2.webp';
import cardAgentBG from '../assets/card_bg.webp';

// components
import WeaponSkins from './WeaponSkins';
import Footer from '@/components/Footer';
import DesktopMenu from '@/components/DesktopMenu';

export default function Weapons() {
  const [weapons, setWeapons] = useState([]);
  let [category, setCategories] = useState([]);
  let weaponsArr = [];
  let categoriesArr = [];

  useEffect(() => {
    document.title = `Valorant Hub | Weapons`;

    fetch('https://valorant-api.com/v1/weapons')
      .then((res) => res.json())
      .then((data) => getData(data.data));
  });

  let categoryFiltred = category.filter((item, index) => {
    return category.indexOf(item) === index;
  });

  const getData = (data) => {
    let optionValue = document.querySelector('select').value;
    const allWeapons = document.querySelectorAll('.main__weapon');

    for (let i = 0; i < data.length; i++) {
      data[i].category = data[i].category.split('::')[1];

      weaponsArr.push(data[i]);
      categoriesArr.push(data[i].category);
    }

    for (let i = 0; i < allWeapons.length; i++) {
      if (optionValue === 'all') {
        allWeapons[i].classList.add('show');
      } else if (optionValue === allWeapons[i].classList[0]) {
        allWeapons[i].classList.add('show');
      } else {
        allWeapons[i].classList.remove('show');
      }
    }
    setWeapons(weaponsArr);
    setCategories(categoriesArr);
  };

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
        <img src={valorantBG3} alt="background"></img>
      </div>
      <div className="menu__mobile">
        <nav>
          <ul>
            <div className="link">
              {' '}
              <Link to="/">
                <BiUserPin />
                <li>Agents</li>
              </Link>
            </div>
            <div className="link selected">
              {' '}
              <Link to="/weapons">
                <RiKnifeLine />

                <li>Weapons</li>
              </Link>
            </div>
            <div className="link ">
              {' '}
              <Link to="/maps">
                <TbMapSearch />

                <li>Maps</li>
              </Link>
            </div>
            <div className="link ">
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
            <DesktopMenu name="weapons" />
          </div>
        </div>
      </header>
      <main className="weapons__scss">
        <div className="flex">
          <div className="main__title">
            <h1>Weapons</h1>
            <p>Discover all valorant weapons!</p>
          </div>
          <div className="main__filter">
            <select name="filter" id="filter">
              <option value="all">All categories</option>

              {categoryFiltred.map((i, index) => (
                <option key={index} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="main__weapons">
          {weapons.map((i, index) => (
            <div className={`${i.category} main__weapon show`} key={index}>
              <Link
                to={`skins/${i.displayName.toLowerCase()}/${i.uuid}`}
                key={index}
              >
                <div className="main__weapon__bg">
                  <img src={cardAgentBG} alt="" className="bg__image" />

                  <div className="main__weapon__title">
                    <h1>{i.displayName}</h1>
                  </div>

                  <div className="main__weapon__icon">
                    <img src={i.displayIcon} alt="" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
