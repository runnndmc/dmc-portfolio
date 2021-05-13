import React from "react";

import Layout from "../shared/layout/Layout";
import Project from "../components/Project";
import "./Work.css";

const Work = ({ projectsList }) => {

  const projectsJSX = projectsList.map((project) => (
    <Project project={project} key={project.id} />
  ));
  
  return (
    <Layout>
      <span id="work"> &nbsp; </span>
      <div className="work">{projectsJSX}</div>
    </Layout>
  );
};

export default Work;
