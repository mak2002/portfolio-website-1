import React, { useState } from "react";
import "../App.css";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Navbar({ setcolorTheme }) {
  const [showLinks, setshowLinks] = useState(false);

  return (
    <div className="navbar fixed z-10  duration-700 ease-in-out">
      <div className="wrapper">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <a className="hover:bg-white" href="#about">About</a>
          <a className="hover:bg-white" href="#skills">Skills</a>
          <a className="hover:bg-white" href="#projects">Projects</a>
          <a className="hover:bg-white" href="#contact">Contact</a>
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
