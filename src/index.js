import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router} from 'react-router-dom';


const projectsList = [
  {
    id: 1,
    title: "Still Positive",
    photoLink: {
      href:"https://stillpositive.netlify.app/",
      src:"https://i.imgur.com/XqKz45j.png",
    },
    devIcons: {
      src1:"https://img.icons8.com/color/48/000000/react-native.png",
      src2:"https://img.icons8.com/color/48/000000/css3.png",
      src3:"./airtable.png"
    },
    site:"https://stillpositive.netlify.app/",
    github:"https://github.com/runnndmc/still-positive"
  },
  {
    id: 2,
    title: "New Alternatives",
    photoLink: {
      href:"http://new-alternatives-site.surge.sh/",
      src: "https://i.imgur.com/1aUVjGC.png"
    },
    devIcons: {
      src1:"https://img.icons8.com/color/48/000000/mongodb.png",
      src2:"https://img.icons8.com/color/48/000000/nodejs.png",
      src3:"https://img.icons8.com/color/48/000000/react-native.png"
    },
    site:"http://new-alternatives-site.surge.sh/",
    github:"https://github.com/chrisratsimba123/new-alternatives-app/"
  },
  {
    id: 3,
    title: "Movie Worm",
    photoLink: {
      href:"https://moiveworm.netlify.app",
      src:"https://i.imgur.com/U5lC9z8.png"
    },
    devIcons: {
      src1:"./ruby.png",
      src2:"./rails.png",
      src3:"https://img.icons8.com/color/48/000000/react-native.png"
    },
    site:"https://moiveworm.netlify.app",
    github:"https://github.com/runnndmc/MovieWorm"
  }
];


ReactDOM.render(
  <Router>
    <App projectsList={projectsList}/>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
