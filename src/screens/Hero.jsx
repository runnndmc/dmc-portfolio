import React from "react";

import Layout from "../shared/layout/Layout";
import "./hero.css";

const Hero = () => {
  return (
    <Layout>
      <div className="hero__wrapper animate">
        <p className="hero__hello animate up">Hello World! I'm</p>
        <h1 className="hero__name animate up">Dayna Christison</h1>
        <p className="hero__job-title animate up">Full Stack Developer [ She , Her , Hers ]</p>
      </div>
    </Layout>
  );
};

export default Hero;


/* ===== NOTES ===== */
// scss ? 
// annimation instead?
// link to check out work in hero 
