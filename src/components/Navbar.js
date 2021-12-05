import React, { useState } from "react";
import "../App.css";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Navbar({ setcolorTheme }) {
  const [showLinks, setshowLinks] = useState(false);

  return (
    <div className="navbar fixed z-10">
      <div className="wrapper">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <button id="menu" onClick={() => setshowLinks(!showLinks)}>
          <i>
            <MenuIcon />
          </i>
        </button>
      </div>
    </div>
  );
}
// #4587BA #BA7845
