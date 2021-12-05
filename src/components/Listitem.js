import React from "react";
import Typography from "@mui/material/Typography";

export default function Listitem() {
  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Material-UI",
    "Tailwind",
    // "Node JS, Express",
  ];
  return (
    <div className="">
      <div className="skills-wrapper flex flex-wrap text-center content-center align-middle relative mt-48 left-24 w-full">
        {skills.map((skill) => {
          return (
            <div>
              <img
                className=" m-20 rounded-lg transition duration-400 ease-in-out hover:-translate-y-1 hover:scale-110 transform object-cover h-48 w-18"
                src={
                  `${process.env.PUBLIC_URL}/icons/` +
                  skill.toLocaleLowerCase() +
                  ".png"
                }
              />
              <Typography variant="h3" className="">
                {skill}
              </Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
}
