import React from "react";
import "../App.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Contact() {
  return (
    <div className="section" id="contact">
      <Typography variant="h2" className=" text-center relative m-auto top-16">
        Contact
      </Typography>

      <div className="icons relative top-16 flex justify-center">

        <TwitterIcon className="m-10 h-10"></TwitterIcon>
        <LinkedInIcon className="m-10"></LinkedInIcon>
        <EmailIcon className="m-10"></EmailIcon>
        <GitHubIcon className="m-10"></GitHubIcon>
      </div>
    </div>
  );
}
