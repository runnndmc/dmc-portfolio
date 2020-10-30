import React from 'react'

const Nav = () => {

    return(
        <div className='nav'>
            <ul className='nav-bar'>
                <a href='#about'><h5 className='about-tag'>ABOUT</h5></a>
                <a href='#work'><h5 className='work-tag'>WORK</h5></a>
                <a href='#contact'><h5 className='contact-tag'>CONTACT</h5></a>
                <a href='https://drive.google.com/file/d/1k_wNLq3TvGvQ8nmJBkKg7FrS1E7YoiGu/view?usp=sharing' target="_blank"><button>RESUME</button></a>
            </ul>
        </div>
    )
}

export default Nav