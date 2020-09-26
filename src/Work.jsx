import React from 'react'
import { Link } from 'react-router-dom'
import './Work.css'

const Work = () => {

    return(
        <div className='work'>
            <div className='description'>
            <a href='https://moiveworm.netlify.app' target="_blank"><img className='website-still' src='https://i.imgur.com/U5lC9z8.png' alt='Movie Worm website preview'/></a>
                <div className='text'>
                <h3 className='title'>MovieWorm</h3>
                    <p>Built a Ruby on Rails server, with three database tables which included user authentication and a join table. Created an interactive React front-end with full CRUD on all movies and the ability to create a review and rating for each specific movie.</p>
                    <div className='button-container'>
                        <a href='https://moiveworm.netlify.app' target="_blank"><button className='lookup'>Site</button></a>
                        <a href='https://github.com/runnndmc/MovieWorm' target="_blank"><button className='lookup'>Code</button></a>
                    </div>
                    <p className='built-with'>Built with Ruby on Rails and React </p>
                </div>
            </div>
            <div className='description'>
            <a href='http://new-alternatives-site.surge.sh/'  target="_blank"><img className='website-still-right' src='https://i.imgur.com/1aUVjGC.png' alt='New Alternatives website preview'/></a>
                <div className='text-left'>
                    <h3 className='title'>New Alternatives</h3>
                    <p>In collaboration with a UX design team and three other software engineers, built a full-stack MERN CRUD site which took an already existing non-profit website and fully redesigned it. New Alternatives is a user friendly and interactive site with user testimonials and video carousels.</p>
                    <div className='button-container-left'>
                        <a href='http://new-alternatives-site.surge.sh/'  target="_blank"><button className='lookup'>Site</button></a>
                        <a href='https://github.com/chrisratsimba123/new-alternatives-app/' target="_blank"><button className='lookup'>Code</button></a>
                    </div>
                    <p className='built-with-right'>Built with Express MongoDB Mongoose and React </p>
                </div>
            </div>
            <div className='description'>
            <a href='https://examine-tracker.netlify.app/' target="_blank"><img className='app-still' src="https://i.imgur.com/W9x9TgU.png" alt='examine application preview'/></a>
                <div className='text'>
                    <h3 className='title'>Examine App</h3>
                    <p>A medical tracker application with mobile first design. Examine is built with a React front-end utilizing Hooks. The bills display and utilize all CRUD actions which allows the user to interact with their medical bills. Airtable host's the data API.</p>     
                    <div className='button-container'>
                        <a href='https://examine-tracker.netlify.app/' target="_blank"><button className='lookup'>Site</button></a>
                        <a href='https://github.com/runnndmc/examine' target="_blank"><button className='lookup'>Code</button></a>
                    </div>
                    <p className='built-with'>Built with React</p>    
                </div>
            </div>
        </div> 
    )
}

export default Work