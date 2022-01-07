import React from "react";
import {
    FaWordpress,
    FaHtml5,
    FaJsSquare,
    FaNodeJs, 
    FaPhp, 
    FaSass,
    FaElementor,
    FaCss3Alt,
    FaReact
    
  } from "react-icons/fa";
  import { SiExpress, SiMaterialui, SiMongodb } from "react-icons/si"

import Layout from "../shared/layout/Layout";

const Tech = () => {
  return (
    <Layout>
      <div className="tech__wrapper">
        <h2>Technologies</h2>
        <FaWordpress></FaWordpress>
        <FaHtml5></FaHtml5>
        <FaJsSquare></FaJsSquare>
        <FaNodeJs></FaNodeJs>
        <FaPhp></FaPhp>
        <FaSass></FaSass>
        <FaElementor></FaElementor>
        <FaCss3Alt></FaCss3Alt>
        <FaReact></FaReact>
        <SiMaterialui></SiMaterialui>
        <SiExpress></SiExpress>
        <SiMongodb></SiMongodb>
      </div>
    </Layout>
  );
};

export default Tech;


/* ===== NOTES ===== */
// scss ? 
// annimation instead?
// link to check out work in hero 
