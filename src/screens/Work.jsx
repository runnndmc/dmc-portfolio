import React from "react";

import Layout from "../shared/layout/Layout";
import Project from "../components/Project";
import SectionIntro from "../components/SectionIntro";
import "./work.css";

const Work = ({ projectsList }) => {
  const projectsJSX = projectsList.map((project) => (
    <Project project={project} key={project.id} />
  ));

  return (
    <Layout>
      <span id="work"> &nbsp; </span>
      <SectionIntro />
      <h2 className="work__heading">Work</h2>
      <div className="work__section-wrapper">
        <div className="work__project-cards">{projectsJSX}</div>
        <div className="work__color-section"></div>
      </div>
    </Layout>
  );
};

export default Work;

/* ===== NOTES ===== */
// check in on projectsJSX in index.js
// are all details needed? - simmplified ?
// work-color changed to a background-color-card or somehting
// similar to the project cards
// also-- is there a better way? scss?
// add ear q site and update vida site name
// work title and T border up instead of down
// button update with nav button
