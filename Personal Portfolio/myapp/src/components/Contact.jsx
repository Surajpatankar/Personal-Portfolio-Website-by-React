import React from 'react'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
     <div className='spann ul'>
         <span>CONTACT US </span>
    </div>

    <div className="contact_page">
         <div className='contact_heading'>
             <h1><span>GET IN TOUCH</span> </h1>
         </div>
         <div className="contact_info">
            <input type="text" name='Enter Your Name' placeholder='Enter Your Name' />
            <input type="text" name='Email' placeholder='Email' />
            <input type="text" name='Phone' placeholder='+91' />
            <textarea type="text"  name='Message' rows={"5"} placeholder='Type Your Message' />
            <a href="" className='send'>SEND</a>
         </div>
    </div>
    </div>
  )
}

export default Contact;