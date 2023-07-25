import React from 'react'
import { FaAmazonPay, FaApple, FaBlog, FaCamera, FaGithub, FaSearch, FaVideo, FaWeibo ,} from 'react-icons/fa';

const Services = () => {
  return (
    <div className='services' id='services'>
        <div className="container">
             <div className="services_header">
               <div className="common">
                
               <h3 className="heading">SERVICES</h3>
               <h1 className="main_header">MY SERVICES</h1>
               <p className="main_content"> “Every great developer you know got there by solving proble
               ms they were unqualified to solve until they actually did it.”</p>
               </div>
               <div className="common_border"> </div>
               <div className="row bgmain">
                <div className="col-4">
                    <div className="services_box">
                        <FaGithub className='commonIcons'/> 
                        <div className="services_box-header">
                            Web Development
                        </div>
                        <div className="services_box-p">
                        GitHub is a code hosting platform for version control and collaboration
                         It lets you and others work together on projects from anywhere
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="services_box">
                        <FaVideo className='commonIcons'/> 
                        <div className="services_box-header">
                            Video Editing                        </div>
                        <div className="services_box-p">
                        VEED is the best free online video editor for professionals.
                         Whether you're a Marketing team, a Podcaster, or you want to make professional-looking training & education videos
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="services_box">
                        <FaCamera className='commonIcons'/> 
                        <div className="services_box-header">
                            Photography
                        </div>
                        <div className="services_box-p">
                        Photography is the process of recording an image – a photograph – on 
                        lightsensitive film or, in the case of digital photography, 
                        </div>
                    </div>
                </div>
               
                <div className="col-4">
                    <div className="services_box">
                        <FaAmazonPay className='commonIcons'/> 
                        <div className="services_box-header">
                            Amazon Store
                        </div>
                        <div className="services_box-p">
                        Apple Inc. is an American multinational technology company headquartered in Cupertino, 
                        California. Apple is the world's largest technology company by revenue
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="services_box">
                        <FaBlog className='commonIcons'/> 
                        <div className="services_box-header">
                            Personal Blog
                        </div>
                        <div className="services_box-p">
                        Publish your passions your way. Whether you'd like to share your knowledge, 
                        experiences or the latest news, create a unique and beautiful blog.
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="services_box">
                        <FaWeibo className='commonIcons'/> 
                        <div className="services_box-header">
                            Web Designer
                        </div>
                        <div className="services_box-p">
                        Build websites with a drag-and-drop interface. Content automatically
                         optimises for device. Everything you need to get anything done,
                        </div>
                    </div>
                </div>
               </div>
             </div>
        </div>
    </div>
  )
}

export default Services;