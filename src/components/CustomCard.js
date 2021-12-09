import React from "react";
import "../App.css";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function CustomCard({
  projectName,
  pText,
  imgPath,
  projectLink,
  frontEnd,
  backEnd,
}) {
  return (
    <div className="transform duration-700 ease-in-out hover:shadow-2xl shadow-lg h-1/6 w-4/12  mx-20 m-2 hover:-translate-y-1 hover:scale-105 bg-gray-200">
      {/* img title features check it out */}
      <img
        src={`${process.env.PUBLIC_URL}/icons/` + `${imgPath}` + ".png"}
        alt=""
        className=""
      />
      <div className="texts relative left-2">
        <Typography variant="h4">{projectName}</Typography>
        <Typography variant="h6">{pText}</Typography>
        <br />
        <Typography variant="h5">{"FrontEnd: " + frontEnd}</Typography>
        <Typography variant="h5">{"BackEnd: " + backEnd}</Typography>
        <br />
        {/* <a href={projectLink}>Check it Out</a> */}
        <button
          href={projectLink}
          className="transform duration-400 ease-in-out m-4 px-8 py-2 rounded-xl hover:scale-110 bg-gray-500"
        >
          <a href={projectLink}>Check it Out</a>
        </button>
      </div>
    </div>
  );
}
