import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {

    return(
        <div className='nav'>
            <ul className='nav-bar'>
                <a href='#about'><h5 className='about-tag'>ABOUT</h5></a>
                <a href='#work'><h5 className='work-tag'>WORK</h5></a>
                <a href='#contact'><h5 className='contact-tag'>CONTACT</h5></a>
                <a href='https://drive.google.com/file/d/1o-oZ5nSibfpzpclIAOlCRg9o4V2YiA_q/view?usp=sharing' target="_blank"><button>Resume</button></a>
            </ul>
        </div>
    )
}

export default Nav