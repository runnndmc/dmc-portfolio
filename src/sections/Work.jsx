import React from "react";
import Layout from "../shared/layout/Layout";

import Project from "../components/Project";
import "./Work.css";

const Work = ({ projectsList }) => {
  return (
    <Layout>
      <div className="work">
        <h2 className="work-title">{" "}
          <span id="work"> &nbsp; </span>WORK
        </h2>
        {projectsList.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </Layout>
  );
};

export default Work;
