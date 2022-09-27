import React from "react";

import Layout from "../shared/layout/Layout";
import "./hero.css";

const Hero = () => {
  return (
    <Layout>
      <div className="hero__wrapper animate">
        <p className="hero__hello animate">Hello World! I'm</p>
        <h1 className="hero__name animate">Dayna Christison</h1>
        <p className="hero__job-title animate">Full Stack Developer [ She , Her , Hers ]</p>
      </div>
    </Layout>
  );
};

export default Hero;