import React from "react";
import "./project.css";

const Project = ({ project }) => {

  function openLink(link) {
    window.open(link);
  }

  

  return (
    <div className="project__card">
        <h3 className="project__title" onClick={() => openLink(`${project.photoLink.src}`)}>{project.title}</h3>
        
        
        <div className="project__video-container">
            <div className="project__video-box">
              <video 
                className='project__clip' 
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => e.target.pause()}
                src="../videos/dmc_portfolio-earq.mp4" 
                type="video/mp4">
              </video>
            </div>
        </div>


        {/* <iframe
          className="website-still"
          src={project.photoLink.src}
          title="Project preview"
        ></iframe> */}


      <div className="text">
        <p className="text">{project.description}</p>
      </div>


      <div className="project__button-wrapper">
        <button className="lookup" onClick={() => openLink(`${project.photoLink.src2}`)}>
        {/* <img
            className="github-icon-btn"
            src="../contact-icons/github.png"
            alt="github-icon"
            width="40px"
          /> */}
          Site
        </button>     

        <button className="lookup" onClick={() => openLink(`${project.github}`)}>
        {/* <img
            className="github-icon-btn"
            src="../contact-icons/github.png"
            alt="github-icon"
            width="40px"
          /> */}
          Code
        </button>

      </div>
    </div>
  );
};

export default Project;


/* ===== NOTES ===== */
//  clean up  unused // card info in general !
// jump up on full card instead of video? - if not maybe lose that 

// ifram instead to hover and play video 