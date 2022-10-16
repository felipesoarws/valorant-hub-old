import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { IoIosArrowBack } from "react-icons/io";

// scss
import "../styles/detailed_agents.scss";

// assets
import valorantLOGO from "../assets/vlr_logo.png";
import valorantBG from "../assets/map_bg.webp";

export default function DetailedAgent() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  const [agent, setAgent] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [role, setRole] = useState([]);

  let abilitiesFiltred = abilities.filter((ab) => {
    return ab.displayIcon !== null;
  });

  useEffect(() => {
    const URL = window.location.href.split("/");

    const fetchStats = async () => {
      const response = await fetch(
        `https://valorant-api.com/v1/agents/${URL[URL.length - 1]}`
      );
      const responseJSON = await response.json();
      const data = responseJSON.data;
      setAgent(data);
      setAbilities(data.abilities);
      setRole(data.role);
    };

    agent.displayName === undefined
      ? (document.title = `Valorant Hub`)
      : (document.title = `Valorant Hub | ${agent.displayName}`);

    fetchStats();
  }, [agent]);

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
        <div className="agent__bg">
          <img src={agent.background} alt="" className="agent" />
          <div className="agent__portrait">
            <img src={agent.fullPortrait} alt="" className="agent-1" />
          </div>
        </div>
        <div className="agent__details">
          <div className="agent__details__desc">
            <h1>Description</h1>
            <p>{agent.description}</p>
          </div>
          <div className="agent__details__abilities">
            <h1>Abilities</h1>

            <div className="agent__details__abilities__row">
              {abilitiesFiltred.map((ab) => (
                <div className="agent__details__ability">
                  <img src={ab.displayIcon} alt="" />
                  <p>{ab.displayName}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="agent__details__role">
            <h1>Role ({role.displayName})</h1>
            <p>{role.description}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
