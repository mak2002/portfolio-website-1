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
  return (
    <div className="section" id="projects">
      <Typography align="center" variant="h1" className=" relative top-16">
        Projects
      </Typography>

      <CustomCard />
    </div>
  );
}
