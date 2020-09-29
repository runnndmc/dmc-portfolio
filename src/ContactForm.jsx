import React from 'react'

const ContactForm = () => {
    return(
        <div className='contact-form'>
            <h3 className='contact-title'><span id='contact'> &nbsp; </span>Let's Keep In Touch!</h3>
            <div className='contact-links'>
                {/* <h5 className='label'>Just </h5> */}
                <a href='mailto: dayna.christison@gmail.com' className='email-link'> Send Me an Email</a>
            </div>
        </div>    
    )
}

export default ContactForm