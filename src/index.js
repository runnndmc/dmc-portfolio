import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";


const projectsList = [
  {
    id: 1,
    title: "Birmingham Speech and Hearing: Live Website",
    photoLink: {
      // src: "https://www.youtube.com/embed/84UZarfMwMw",
      // src2: "https://earq.netlify.app/",
    },
    devIcons: {
      src1: "./dev-icons/wordpress.png",
      src2: "https://img.icons8.com/color/48/000000/css3.png",
      src3: "./dev-icons/elementor.png",
    },
    description:
      "A live webpage for Birmingham Speech and Hearing in Lakeland Florida. I built a designed layout by a team of designers. From the desgin layout, the design team created a customer specific design that I then developed on WordPress.",
  },

  {
    id: 2,
    title: "VIDA & Co.: Admin Feature",
    photoLink: {
        src: "https://www.youtube.com/embed/o7cGMn5_jx8",
        src2: "https://www.youtube.com/embed/o7cGMn5_jx8",
    },
    devIcons: {
      src1: "./dev-icons/react-small.png",
      src2: "./dev-icons/scss.png",
      src3: "./dev-icons/material-ui.png",
    },
    description:
      "Utilizing React, JavaScript, material ui and SCSS, I made a feature on an administration page to view all of the students who have enrolled in a program. The user is able to filter the students by their enrollment status and sort the students by date, email or username in either ascending or descending order.",
    github: "https://www.youtube.com/embed/tFt5vCWaR94",
  },
  {
    id: 3,
    title: "Still Positive: Podcast Website",
    photoLink: {
      //src: "https://www.youtube.com/embed/t8Pp8n53530",
      src2: "https://stillpositive.netlify.app/",
      src: "../project-photos/StillPositive.png",
    },
    devIcons: {
      src1: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
      src2: "https://img.icons8.com/color/48/000000/css3.png",
      src3: "./dev-icons/react-small.png",
    },
    description:
      "A PWA with emphasis on accessibility. The site was created to host the podcast Still Positive for people who are chronically ill and/or disabled. Built with React Hooks with complete responsive modern design, Still Positive utilizes Airtable's API to fetch and store the data.",
    github: "https://github.com/runnndmc/still-positive",
  },
  {
    id: 4,
    title: "New Alternatives: Non-Profit Project",
    photoLink: {
      //src: "https://www.youtube.com/embed/Kt9lTI7pgHQ",
      src2: "http://new-alternatives-site.surge.sh/",
      src: "https://i.imgur.com/1aUVjGC.png",
    },
    devIcons: {
      src1: "https://img.icons8.com/color/48/000000/mongodb.png",
      src2: "https://img.icons8.com/color/48/000000/nodejs.png",
      src3: "./dev-icons/react-small.png",
    },
    description:
      "In collaboration with a UX design team and three other software engineers, built a full-stack MERN CRUD site which took an already existing non-profit website and fully redesigned it. New Alternatives is a user friendly and interactive site with user testimonials and video carousels.",
    github: "https://github.com/chrisratsimba123/new-alternatives-app/",
  },

  // {
  //   id: 3,
  //   title: "Movie Worm",
  //   photoLink: {
  //     href: "https://moiveworm.netlify.app",
  //     src: "https://i.imgur.com/U5lC9z8.png",
  //   },
  //   devIcons: {
  //     src1: "./dev-icons/ruby.png",
  //     src2: "./dev-icons/rails.png",
  //     src3: "./dev-icons/react-small.png",
  //   },
  //   description:
  //     "Built a on Rails server, with three database tables which included user authentication and a join table. Created an interactive React front-end with full CRUD on all movies and the ability to create a review and rating for each specific movie.",
  //   github: "https://github.com/runnndmc/MovieWorm",
  // },
];

ReactDOM.render(
  <Router>
    <App projectsList={projectsList} />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
