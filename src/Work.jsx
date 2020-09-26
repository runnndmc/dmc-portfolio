import React from 'react'
import './Work.css'

const Work = () => {

    return(
        <div className='work'>
            <div className='description'>
                <img className='app-still' src="https://i.imgur.com/W9x9TgU.png" alt='examine application preview'/>
                <div className='text'>
                    <h3>Examine App</h3>
                    <p>A medical tracker application with mobile first design. Examine is built with a React front-end utilizing Hooks. The bills display and utilize all CRUD actions which allows the user to interact with their medical bills. Airtable host's the data API.</p>     
                </div>
            </div>
            <div className='description'>
                <img className='website-still' src='https://i.imgur.com/1aUVjGC.png' alt='New Alternatives website preview'/>
                <div className='text'>
                    <h3>New Alternatives</h3>
                        <p>A website collaboration consisting of a UX design team and three other software engineers to re-design an existing non-profit website utilizing Mongo DB, Mongoose, and Git with a React front-end. New Alternatives is a functional, full-stack CRUD site with testimonials and video carousels.</p>
                </div>
            </div>
            <div className='description'>
                <img className='website-still' src='https://i.imgur.com/U5lC9z8.png' alt='Movie Worm website preview'/>
                <div className='text'>
                <h3>MovieWorm</h3>
                    <p> mean you're aroused, or did you just get a signal that one of your buddies found a grape?</p>
                </div>
            </div>
        </div> 
    )
}

export default Work