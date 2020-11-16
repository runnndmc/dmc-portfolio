import React from 'react'


const ContactForm = () => {

    return(
        <div className='contact-form'>
            <h3 className='contact-title'><span id='contact'> &nbsp; </span>Let's Keep In Touch!</h3>
            <div className='contact-links'>
               <a href='mailto: dayna.christison@gmail.com' className='email-link'> Send Me an Email</a>
              
            </div> 
            <div className='contact-links'>
                <a href='https://www.linkedin.com/in/daynachristison/' >
                <img className='linked-in' src="./linkedin.png"/>
                </a>
                <a href='https://github.com/runnndmc'>
                <img className='linked-in'src="./github.png"/>
                </a>
            </div>
        </div>    
    )
}

export default ContactForm