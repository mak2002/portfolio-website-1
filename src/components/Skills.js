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

export default function Skills() {
  return (
    <div className="section h-screen" id="skills">
      <Typography align="center" variant="h1" className=" relative top-16">
        Skills
      </Typography>

      {/* <div className="list-item-wrapper flex content-center items-center w-full"> */}
      <div className="list-item-wrapper flex w-12/12 m-auto">
        <Listitem />
      </div>
    </div>
  );
}
