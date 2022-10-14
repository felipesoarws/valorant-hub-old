// scss
import "../styles/weapons.scss";

// icons
import { BiUserPin } from "react-icons/bi";
import { TbMapSearch } from "react-icons/tb";
import { RiKnifeLine } from "react-icons/ri";
import { BiMenuAltRight } from "react-icons/bi";

// hooks
import { Link, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

// assets
import valorantLOGO from "../assets/vlr_logo.png";
import valorantBG3 from "../assets/map_bg2.webp";
import cardAgentBG from "../assets/card_bg.webp";

export default function Weapons() {
  const [weapons, setWeapons] = useState([]);
  useEffect(() => {
    document.title = `Valorant Hub | Weapons`;

    fetch("https://valorant-api.com/v1/weapons")
      .then((res) => res.json())
      .then((data) => setWeapons(data.data));
  });

  const showMobileMenu = () => {
    const menuMobile = document.querySelector(".menu__mobile");

    if (menuMobile.classList[1] === "show__menu") {
      menuMobile.classList.remove("show__menu");
    } else {
      menuMobile.classList.add("show__menu");
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
              {" "}
              <Link to="/">
                <BiUserPin />
                <li>Agents</li>
              </Link>
            </div>
            <div className="link selected">
              {" "}
              <Link to="/weapons">
                <RiKnifeLine />

                <li>Weapons</li>
              </Link>
            </div>
            <div className="link ">
              {" "}
              <Link to="/maps">
                <TbMapSearch />

                <li>Maps</li>
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
            <nav>
              <ul>
                <div className="link ">
                  {" "}
                  <Link to="/">
                    <BiUserPin />
                    <li>Agents</li>
                  </Link>
                </div>
                <div className="link selected">
                  {" "}
                  <Link to="/weapons">
                    <RiKnifeLine />

                    <li>Weapons</li>
                  </Link>
                </div>
                <div className="link ">
                  {" "}
                  <Link to="/maps">
                    <TbMapSearch />

                    <li>Maps</li>
                  </Link>
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="weapons__scss">
        <div className="main__title">
          <h1>Weapons</h1>
          <p>Discover all valorant weapons!</p>
        </div>
        <div className="main__filter"></div>
        <div className="main__weapons">
          {weapons.map((i, index) => (
            <div className="main__weapon" key={index}>
              <div className="main__weapon__bg">
                <img src={cardAgentBG} alt="" className="bg__image" />

                <div className="main__weapon__title">
                  <h1>{i.displayName}</h1>
                </div>

                <div className="main__weapon__icon">
                  <img src={i.displayIcon} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
