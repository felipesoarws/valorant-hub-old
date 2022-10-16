import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { IoIosArrowBack } from "react-icons/io";

// scss
import "../styles/weapons.scss";
import "../styles/weapon_skins.scss";

// assets
import valorantLOGO from "../assets/vlr_logo.png";
import valorantBG from "../assets/map_bg3.webp";
import cardAgentBG from "../assets/card_bg.webp";

export default function WeaponSkins() {
  const [skins, setSkins] = useState([]);

  let skinsFiltred = skins.filter((ab) => {
    return ab.displayIcon !== null;
  });

  let skinsFiltred2 = skinsFiltred.filter((ab) => {
    return !ab.displayName.includes("Standard");
  });

  let skinsFiltred3 = skinsFiltred2.filter((ab) => {
    return !ab.displayName.includes("Random");
  });

  const navigate = useNavigate();
  const goBack = () => {
    navigate("/weapons");
  };

  useEffect(() => {
    const URL = window.location.href.split("/");

    const fetchStats = async () => {
      const response = await fetch(
        `https://valorant-api.com/v1/weapons/${URL[URL.length - 1]}`
      );
      const responseJSON = await response.json();
      const data = responseJSON.data.skins;

      setSkins(data);
    };

    skins.displayName === undefined
      ? (document.title = `Valorant Hub`)
      : (document.title = `Valorant Hub | ${skins.displayName} Skins`);

    fetchStats();
  }, [skins]);

  return (
    <div>
      <div className="bg fade-out">
        <img src={valorantBG} alt="background"></img>
      </div>
      <header className="da__scss">
        <div className="header__logo" onClick={goBack}>
          <img src={valorantLOGO} alt="logo" />
        </div>
        <div className="header__back_home">
          <button onClick={goBack}>
            <IoIosArrowBack />
          </button>
        </div>
      </header>
      <main className="da__scss">
        <div className="main__weapons">
          {skinsFiltred3.map((i, index) => (
            <div className={`${i.category} main__weapon show`} key={index}>
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
