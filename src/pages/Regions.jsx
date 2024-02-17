// scss
import '../styles/regions/regions.scss';
import '../styles/reset.scss';

// icons
import { BiUserPin } from 'react-icons/bi';
import { TbMapSearch } from 'react-icons/tb';
import { RiKnifeLine } from 'react-icons/ri';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineTrophy } from 'react-icons/ai';

// hooks
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

// assets
import valorantLOGO from '../assets/vlr_logo.png';
import valorantBG2 from '../assets/map_bg6.webp';
import Footer from '@/components/Footer';
import DesktopMenu from '@/components/DesktopMenu';
import BrazilMap from '../assets/brazilmap.png';
import EuropeMap from '../assets/europemap.png';
import NorthAmericaMap from '../assets/northamericamap.png';

// data
import brazilTeams from '../stats/teams/brazil.json';
import europeTeams from '../stats/teams/europe.json';
import northAmericaTeams from '../stats/teams/northamerica.json';

export default function Regions() {
  useEffect(() => {
    document.title = `Valorant Hub | Regions`;
  }, []);

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
            <div className="link">
              {' '}
              <Link to="/maps">
                <TbMapSearch />

                <li>Maps</li>
              </Link>
            </div>
            <div className="link selected">
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
            <DesktopMenu name="regions" />
          </div>
        </div>
      </header>
      <main className="regions__scss">
        <div className="main__title">
          <h1>Regions</h1>
          <p>Discover all regions and their teams!</p>
        </div>
        <div className="main__regions">
          <div className="main__regions__region">
            <div className="main__regions__region__name">
              <h1>Brazil</h1>
              <img src={BrazilMap} alt="brazil map" />
            </div>
            <div className="main__regions__region__teams">
              {brazilTeams.teams.map((team, index) => (
                <div className="main__regions__region__teams__team" key={index}>
                  <div className="team__stats">
                    <div className="team__stats__ranking">
                      <span>{team.team_rank}.</span>
                    </div>

                    <div className="team__stats__logo">
                      <img src={team.team_logo} alt="team logo" />
                    </div>

                    <div className="team__stats__name">
                      <h3>{team.team_name}</h3>
                      <span>{team.rating_score} points</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="main__regions__region">
            <div className="main__regions__region__name">
              <h1>Europe</h1>
              <img src={EuropeMap} alt="europe map" />
            </div>
            <div className="main__regions__region__teams">
              {europeTeams.teams.map((team, index) => (
                <div className="main__regions__region__teams__team" key={index}>
                  <div className="team__stats">
                    <div className="team__stats__ranking">
                      <span>{team.team_rank}.</span>
                    </div>

                    <div className="team__stats__logo">
                      <img src={team.team_logo} alt="team logo" />
                    </div>

                    <div className="team__stats__name">
                      <h3>{team.team_name}</h3>
                      <span>{team.rating_score} points</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="main__regions__region">
            <div className="main__regions__region__name">
              <h1>North America</h1>
              <img
                src={NorthAmericaMap}
                className="na"
                alt="north america map"
              />
            </div>
            <div className="main__regions__region__teams">
              {northAmericaTeams.teams.map((team, index) => (
                <div className="main__regions__region__teams__team" key={index}>
                  <div className="team__stats">
                    <div className="team__stats__ranking">
                      <span>{team.team_rank}.</span>
                    </div>

                    <div className="team__stats__logo">
                      <img src={team.team_logo} alt="team logo" />
                    </div>

                    <div className="team__stats__name">
                      <h3>{team.team_name}</h3>
                      <span>{team.rating_score} points</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
