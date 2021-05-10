import React from "react";

import Project from "./Project";
import "./Work.css";

const Work = ({ projectsList }) => {
  return (
    <div className="work">
      <h2 className="work-title">{" "}<span id="work"> &nbsp; </span>WORK</h2>
      {projectsList.map((project) => (
        <Project project={project} key={project.id} />
      ))}
    </div>
  );
};

export default Work;
