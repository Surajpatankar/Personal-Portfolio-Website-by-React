import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import img3 from '../../src/img/about.png'

const About = () => {
  return (
    <div className='about' id='about'>
      <div className="About_content">
         <div className="about_heading">
           <h1>About Me</h1> 
           <p>he “About Me” page is what many potential clients look at either 
             right away, or at least the second thing they look at when 
             viewing a freelance portfolio. As a solo worker, providing potential clients with information on yourself and your work is essential, because nobody wants to hire just anyone off the street. It is reasonable that a bit of research on the individual should be done, and an about page can make or break relationships with leads. As a result,
             an about page can make or break an entire freelancing business.</p>
         </div>
         <div className="content">
            <div className="col-7">
                <div className="content_head">
                <h1>HI I AM A <span> FREELANCER</span> EXPERT IN WEBFLOW DEVELOPMENT</h1>
                 <p>6+ years of experience in Webflow development.<br/>My mission is to design and develop that is to you and your audience love</p>
                  <br />
                 <a href="" className='wassup'><FaWhatsapp width={'50px'}/>  LETS CHAT ON WHATSAPP</a>
                </div>
         
            </div>
            <div className="col-7" >
                <img className='imgg' src={img3} width={"500"} height={'533'}   />
            </div>
         </div>
      </div>
    </div>
  )
}

export default About;