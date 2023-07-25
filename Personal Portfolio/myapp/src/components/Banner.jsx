import React from 'react'
import { FaFacebookF,FaInstagram,FaPlay,FaTwitter,FaWhatsapp} from 'react-icons/fa'
import img2 from "../../src/img/man.png"
const Banner = () => {
  return (
    <div className='header' id='home'>
      <div className="container">
        <div className="row">
           <div className="col-6">
              <div className="header_content">
                <div className="header_section">
                <ul className="header_ul">
                   <li> <FaWhatsapp  /></li>  
                   <li><FaFacebookF  /></li> 
                   <li> <FaInstagram /></li>
                   <li><FaTwitter    /></li>
                </ul> 
                <h1>I am Suraj Patankar</h1>
                <p>I'm a Suraj, professional web developer with long time experience in this field </p>
                 <div className="header_button">
                  <a href="" className='btn btn-outline'>My Portfolio</a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="" className='btn btn-smart'>< FaPlay className='play'/></a>   
                 </div>
               </div>
              </div>
           </div>
           <div className="col-6">
                <div className="banner_img">
                  <img src={img2}  height={"735px"} width={"630px"}/>
                </div>
           </div>
        </div>
      </div>


    </div>
  )
}

export default Banner;