import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";



const projectsList = [
  {
    id: 1,
    title: "United Martial Arts Centers",
    links: {
      src: "https://www.umacenters.com/",
      imgSrc: "../project-photos/WebFlow-UMAC.png",
    },
    alt: "Project preview of United Martial Arts Centers website.",
    description:
      "Built a Webflow site for United Martial Arts Centers to increase student enrollment, streamline class scheduling, and reflect their values. Handled end-to-end design and development — from design to launch. Worked directly with the client to define user flows and built the site using Webflow CMS to manage class schedules, and location-specific content. Integrated Google Analytics and Pably Connect for lead tracking and automation.",
  },
  {
    id: 2,
    title: "Love to Hear Again Audiology",
    links: {
      src: "https://www.love2hearagain.com/",
      imgSrc: "../project-photos/love-to-hear-again-aud.png",
    },
    alt: "Website preview of Love to Hear Again Audiology's website.",
    description:
      "A live webpage for Love to Hear Again Audiology. Developed from scratch with WordPress, Elementor Pro, CSS, HTML5 and JavaScript. Implemented a responsive web design and ensured the site was completely accessible for all users with performance results for each screen is above 97%.",
  },
  {
    id: 3,
    title: "VIDA & Co. Feature: Sort and Filter",
    links: {
      src: "../videos/form-sort-and-filter.mp4",
      imgSrc: "../project-photos/one-league.png",
    },
    alt: "Website preview of a table of names and dates of enrollment status with the title 'Admin Page' at the top",
    description:
      "Utilizing React, JavaScript, material UI and SCSS, I built a feature on the administration page to view every student enrolled. The user is able to filter the students by their enrollment status and sort the students by date, email or username in either ascending or descending order. I utilized React useState hook in addition to a switch statement to sort the data either ascending or descending.",
    github: "https://www.youtube.com/embed/tFt5vCWaR94",
  },
  {
    id: 4,
    title: "AccessAble",
    links: {
      src: "https://codepen.io/Daynac143/pen/yLvKWGW",
      imgSrc: "../project-photos/front-end-development-accesssable.png",
    },
    alt: "Project preview two input fields with the title 'AccesssAble' centered at the top",
    description:
      "A PWA made on CodePen with HTML, CSS, and JavaScript. The app is set to take in a sentence and convert it into an accessable hashtag with the first letter of each word capitalized with no spaces in the hashtag.",
  }

  // {
  //   id: 3,
  //   title: "Movie Worm",
  //   links: {
  //     href: "https://moiveworm.netlify.app",
  //     src: "https://i.imgur.com/U5lC9z8.png",
  //     videoSrc: "../videos/project_BirminghamS:H.mp4"
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
  // {
  //   id: 3,
  //   title: "Still Positive: Podcast Website",
  //   links: {
  //     videoSrc: "../videos/stp_ preview.mp4",
  //     src2: "../project-photos/StillPositive.png",
  //   },
  //   description:
  //     "A PWA with emphasis on accessibility. The site was created to host the podcast Still Positive for people who are chronically ill and/or disabled. Built with React Hooks with complete responsive modern design, Still Positive utilizes Airtable's API to fetch and store the data.",
  //   github: "https://github.com/runnndmc/still-positive",
  // },
];

ReactDOM.render(
  <Router>
    <App projectsList={projectsList} />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
