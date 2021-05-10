import React from "react";
import "./Work.css";

const Work = () => {
    //Project   
  return (
    <div className="work">
      <div className="stp-desc">
        <h2 className="work-title">
          {" "}
          <span id="work"> &nbsp; </span>WORK
        </h2>
        <h3 className="title">Still Positive</h3>
        <a
          href="https://stillpositive.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="app-still"
            src="https://i.imgur.com/XqKz45j.png"
            alt="Still Positive website preview"
          />
        </a>
        <div className="built-with">
          <img
            className="dev-icon"
            src="https://img.icons8.com/color/48/000000/react-native.png"
            alt="a React.js icon"
          />
          <img
            className="dev-icon"
            src="https://img.icons8.com/color/48/000000/css3.png"
            alt="a CSS3 icon"
          />
          <img
            className="dev-icon"
            src="./airtable.png"
            alt="an airtable icon"
          />
        </div>
        <div className="text">
          <p>
            A PWA with emphasis on accessibility. The site was created to host
            the podcast Still Positive for people who are chronically ill and/or
            disabled. Built with React Hooks with complete responsive modern
            design, Still Positive utilizes Airtable's API to fetch and store
            the data.
          </p>
          <div className="button-container-left">
            <a
              href="https://stillpositive.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="lookup">Site</button>
            </a>
            <a
              href="https://github.com/runnndmc/still-positive"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="lookup">Code</button>
            </a>
          </div>
        </div>
      </div>

      <div className="new-alt-desc">
        <h3 className="title">New Alternatives</h3>
        <a
          href="http://new-alternatives-site.surge.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="website-still"
            src="https://i.imgur.com/1aUVjGC.png"
            alt="New Alternatives website preview"
          />
        </a>
        <div className="built-with">
          <img
            className="dev-icon"
            src="https://img.icons8.com/color/48/000000/mongodb.png"
            alt="a mongoDB icon"
          />
          <img
            className="dev-icon"
            src="https://img.icons8.com/color/48/000000/nodejs.png"
            alt="a node icon"
          />
          <img
            className="dev-icon"
            src="https://img.icons8.com/color/48/000000/react-native.png"
            alt="a React.js icon"
          />
        </div>
        <div className="text">
          <p>
            In collaboration with a UX design team and three other software
            engineers, built a full-stack MERN CRUD site which took an already
            existing non-profit website and fully redesigned it. New
            Alternatives is a user friendly and interactive site with user
            testimonials and video carousels.
          </p>
          <div className="button-container-left">
            <a
              href="http://new-alternatives-site.surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="lookup">Site</button>
            </a>
            <a
              href="https://github.com/chrisratsimba123/new-alternatives-app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="lookup">Code</button>
            </a>
          </div>
        </div>
      </div>

      <div className="movie-worm-desc">
        <h3 className="title">MovieWorm</h3>
        <a
          href="https://moiveworm.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="website-still"
            src="https://i.imgur.com/U5lC9z8.png"
            alt="Movie Worm website preview"
          />
        </a>
        <div className="built-with">
          <img className="dev-icon" src="./ruby.png" alt="a ruby gem" />
          <img className="dev-icon" src="./rails.png" alt="a rails icon" />
          <img
            className="dev-icon"
            src="https://img.icons8.com/color/48/000000/react-native.png"
            alt="a React.js icon"
          />
        </div>
        <div className="text">
          <p>
            Built a on Rails server, with three database tables which included
            user authentication and a join table. Created an interactive React
            front-end with full CRUD on all movies and the ability to create a
            review and rating for each specific movie.
          </p>
          <div className="button-container">
            <a
              href="https://moiveworm.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="lookup">Site</button>
            </a>
            <a
              href="https://github.com/runnndmc/MovieWorm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="lookup">Code</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
