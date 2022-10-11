import React from "react";

import Layout from "../shared/layout/Layout";
import Project from "../components/Project";
import SectionIntro from "../components/SectionIntro";
import "./work.css";

const Work = ({ projectsList }) => {

  const projectCards = projectsList.map((project) => (
    <Project project={project} key={project.id} />
  ));

  return (
    <Layout>
      <span id="work"> &nbsp; </span>
      <SectionIntro />
      <h2 className="work__heading">Work</h2>
      <div className="work__section-wrapper">
        <div className="work__project-cards">{projectCards}</div>
      </div>
    </Layout>
  );
};

export default Work;


