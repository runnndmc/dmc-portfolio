import React from "react";

const Project = () => {
    
 function openLink(link){
    console.log(link)
   // window.open(link)
}
  return (
  <div className="project-wrapper">
      <h3 className="title"></h3>
        <img
            className="website-still"
            src=""
            onClick={openLink()}
            alt="website preview"
        />
    <div className="built-with">
        <img className="dev-icon"/>
        <img className="dev-icon"/>
        <img className="dev-icon"/>
    </div>
    <div className="text">
        <p></p>
    </div>
    <div className="button-container-left">
        <button className="lookup" onClick={openLink()}>Site</button>
        <button className="lookup" onClick={openLink()}>Code</button>
    </div>
  </div>
};

export default Project;
