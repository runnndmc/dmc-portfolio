import React from "react";

import Layout from "../shared/layout/Layout";
import "./hero.css";

const Hero = () => {
/*     const colorList = [
        "#e86521",
        "#ff9650",
        "#af3500",
    ]
    let index = 0;


function changeBackground(){
   const changeColor = setInterval(function(){

      document.querySelector('.hero').style.backgroundColor = colorList[index]
        console.log(colorList[index])

        index++
        if(index >= 3){
            clearInterval(changeColor)
            index = 0
        } 
    }, 1000) */



  return (
    <Layout>
      <div className="hero"/*  onMouseEnter={changeBackground} */>
        <p className="hello">Hello World! I'm</p>
        <h2 className="intro">Dayna Christison</h2>
        <p className="job-title">Full Stack Developer [ She / Her / Hers ]</p>
      </div>
    </Layout>
  );
};

export default Hero;
