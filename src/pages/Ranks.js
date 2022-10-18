// scss
import "../styles/ranks.scss";

// icons
import { BiUserPin } from "react-icons/bi";
import { TbMapSearch } from "react-icons/tb";
import { RiKnifeLine } from "react-icons/ri";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineTrophy } from "react-icons/ai";

// hooks
import { Link, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

// assets
import valorantLOGO from "../assets/vlr_logo.png";
import valorantBG2 from "../assets/map_bg4.webp";

export default function Ranks() {
  const [ranks, setRanks] = useState([]);

  let ranksFiltred = ranks.filter((rank) => {
    return rank.largeIcon !== null;
  });

  ranksFiltred.shift();

  useEffect(() => {
    document.title = `Valorant Hub | Ranks`;

    fetch("https://valorant-api.com/v1/competitivetiers")
      .then((res) => res.json())
      .then((data) => setRanks(data.data[4].tiers));
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
        <img src={valorantBG2} alt="background"></img>
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
            <div className="link">
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
            <div className="link selected">
              {" "}
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
            <nav>
              <ul>
                <div className="link ">
                  {" "}
                  <Link to="/">
                    <BiUserPin />
                    <li>Agents</li>
                  </Link>
                </div>
                <div className="link">
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
                <div className="link selected">
                  {" "}
                  <Link to="/ranks">
                    <AiOutlineTrophy />

                    <li>Ranks</li>
                  </Link>
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="maps__scss">
        <div className="main__title">
          <h1>Ranks</h1>
          <p>Discover all competitive ranks!</p>
        </div>
        <div className="main__ranks">
          {ranksFiltred.map((rank, index) => (
            <div
              className={`main__rank ${rank.tierName.toLowerCase()}`}
              key={index}
            >
              <div className="main__ranks__icon">
                <img src={rank.largeIcon} alt="" />
              </div>
              <div className="main__ranks__title">
                <h1>{rank.tierName}</h1>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
