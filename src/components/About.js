import React from "react";
import "../App.css";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function About() {
  return (
    <div className="section" id="about">
      {/* <section className=" h-screen flex items-center justify-center"> */}
      <section className=" h-screen ">
        <Typography align="center" variant="h1" className="relative top-80 ">
          Hello &#128075;, <br />I am Mayank Bondre
        </Typography>
        <br />

        <Typography align="center" variant="h3" className="relative  top-80">
          <br />
          Junior Web Developer &#128104;, Interested in Contributing to Open
          Source &#127919;,
          <br />
          Always Learning new things &#128221;
        </Typography>
      </section>
    </div>
  );
}
