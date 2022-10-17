// scss
import "../styles/home.scss";

// hooks
import { Link, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

// assets
import valorantLOGO from "../assets/vlr_logo.png";
import valorantBG from "../assets/map_bg.webp";

export default function Error() {
  document.title = `Valorant Hub | Error!`;
  return (
    <div className="App">
      <div className="bg fade-out">
        <img src={valorantBG} alt="background"></img>
      </div>

      <main>
        <div className="main__title__error">
          <h1>This page doesn't exist.</h1>
          <p>Click in the icon to back to the homepage.</p>
          <div className="header__logo">
            <Link to="/">
              <img src={valorantLOGO} alt="logo" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
