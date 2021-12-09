import React from "react";
import "../App.css";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Listitem from "../components/Listitem";
import CustomCard from "./CustomCard";

export default function Projects() {
  const features1 = [
    "Add Colors",
    "Show them in rows",
    "Click to Copy to clipboard",
  ];
  const frontEnd1 = "React, Material UI";
  const backEnd1 = "";

  const features2 = [
    "Adding and Deleting Notes",
    "Adding Todos",
    "(To be implemented) Editing Notes",
  ];
  return (
    <div className="section projects-section flex-col justify-center w-12/12  max-w-full  bg-blue-200  duration-700 ease-in-out" id="projects">
      <Typography align="center" variant="h1" className=" relative top-16">
        Projects Scroll to top button
      </Typography>

      <div className="customCard relative top-24 flex flex-wrap justify-center">
        <CustomCard
          className=""
          projectName={" Student Result Management app"}
          imgPath="noteapp"
          pText={"This is just a Simple Note Taking App."}
          projectLink={"https://github.com/mak2002/Color-Theme-Storage-App"}
          frontEnd={"ReactJS, Material-UI"}
          backEnd={"PostgresSQL, Express JS"}
        />
        <CustomCard
          className=""
          projectName={" Note Taking App"}
          imgPath="noteapp"
          pText={"This is just a Simple Note Taking App."}
          projectLink={"https://github.com/mak2002/Color-Theme-Storage-App"}
          frontEnd={"ReactJS, Material-UI"}
          backEnd={"JSON Server"}
        />
        <CustomCard
          className=""
          projectName={"Color Storage App"}
          imgPath="colorapp"
          pText={
            "Users can store colors by entering the color in input field and by clicking on box it gets copied to clipboard ."
          }
          projectLink={"https://github.com/mak2002/Color-Theme-Storage-App"}
          frontEnd={"ReactJS"}
          backEnd={"No backend"}
        />
        <CustomCard
          className=""
          projectName={" Github Stats App"}
          imgPath="noteapp"
          pText={"Displays Statistics about your github repo"}
          projectLink={"https://github.com/mak2002/Color-Theme-Storage-App"}
        />
      </div>
    </div>
  );
}
