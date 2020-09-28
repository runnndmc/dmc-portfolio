import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {

    return(
        <div className='nav'>
            <ul className='nav-bar'>
                <a href='#about'><h5 className='about-tag'>ABOUT</h5></a>
                <a href='#work'><h5 className='work-tag'>WORK</h5></a>
                <a href='#contact'><h5 className='contact-tag'>CONTACT</h5></a>
                <a href='https://www.canva.com/design/DAEDCV1YT_8/view?utm_content=DAEDCV1YT_8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink'><button>Resume</button></a>
            </ul>
        </div>
    )
}

export default Nav