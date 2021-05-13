import React from "react";

import Layout from "../shared/layout/Layout";
import Project from "../components/Project";
import "./Work.css";
import SectionIntro from "../components/SectionIntro";

const Work = ({ projectsList }) => {
  const projectsJSX = projectsList.map((project) => (
    <Project project={project} key={project.id} />
  ));

  return (
    <Layout>
      <SectionIntro />
      <span id="work"> &nbsp; </span>
      <div className="work-section">
        <div className="project-cards">{projectsJSX}</div>
        <div className="work-color"></div>
      </div>
    </Layout>
  );
};

export default Work;
