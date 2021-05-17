import React from "react";

import Layout from "../shared/layout/Layout";
import "./hero.css";

const Hero = () => {
  return (
    <Layout>
      <div className="hero">
        <p className="hello">Hello World! I'm</p>
        <h2 className="intro">Dayna Christison</h2>
        <p className="job-title">Full Stack Developer [ She / Her / Hers ]</p>
      </div>
    </Layout>
  );
};

export default Hero;
