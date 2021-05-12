import React from "react";
import Layout from "../shared/Layout";

const Hero = () => {
  return (
    <Layout>
      <div className="hero">
        <h2 className="hello">Hello World!</h2>
        <h2 className="intro">
          I'm <br></br>Dayna Christison
        </h2>
        <h3 className="job-title">Full Stack Developer</h3>
      </div>
    </Layout>
  );
};

export default Hero;
