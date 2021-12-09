import React from "react";
import "../App.css";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function About() {
  return (
    <div className="section  duration-700 ease-in-out" id="about">
      {/* <section className=" h-screen flex items-center justify-center"> */}
      <section className=" h-screen flex-col ">
        <Typography align="center" variant="h2" className="relative top-80 ">
          Hello &#128075;, I am Mayank Bondre
        </Typography>
        <br />  

        <Typography align="center" variant="h4" className="relative  top-80">
          <br />
          Junior Web Developer &#128104;, Interested in Contributing to Open
          Source &#127919;,
          <br />
          Always Learning new things &#128221;
        </Typography>

        <svg class="animate-bounce w-6 h-10 relative m-auto top-96">
        <ArrowDownwardIcon  />
        </svg>
      </section>
    </div>
  );
}
