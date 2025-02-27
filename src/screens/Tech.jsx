import React from "react";
import { SiExpress, SiMaterialui, SiMongodb } from "react-icons/si";
import {
  FaWordpress,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaPhp,
  FaSass,
  FaElementor,
  FaCss3Alt,
  FaReact,
  FaNpm,
} from "react-icons/fa";
import "./tech.css"

import Layout from "../shared/layout/Layout";

const Tech = () => {
  return (
    <Layout>
      <h2 className="tech__heading">Technologies</h2>
      <div className="tech__wrapper" style={{ color: "#C64401", fontSize:"4em"}}>
        <FaHtml5></FaHtml5>
        <FaJsSquare></FaJsSquare>
        <FaReact></FaReact>
        <FaNodeJs></FaNodeJs>
        <FaPhp></FaPhp>
        <FaWordpress></FaWordpress>
        <FaElementor></FaElementor>
        <FaCss3Alt></FaCss3Alt>
        <FaSass></FaSass>
        <SiMaterialui></SiMaterialui>
        <SiExpress></SiExpress>
        <SiMongodb></SiMongodb>
        <FaNpm></FaNpm>
      </div>
    </Layout>
  );
};

export default Tech;
