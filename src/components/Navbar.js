import React, { useState } from "react";
import "../App.css";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [showLinks, setshowLinks] = useState(false);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <button onClick={() => setshowLinks(!showLinks)}>
          <i>
            <MenuIcon />
          </i>
        </button>
      </div>
    </div>
  );
}
