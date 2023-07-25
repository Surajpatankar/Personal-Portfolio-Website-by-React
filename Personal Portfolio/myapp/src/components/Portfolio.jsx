import React from 'react'
import img5 from "../../src/img/photogr.jpg";
import img6 from "../../src/img/applee.jpg";
import img8 from "../../src/img/vlogg.jpg";
import img9 from "../../src/img/videoo.jpg";
import img10 from "../../src/img/code.jpg";

const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>
       <div className='portfolio1'>
          <div>
            <h1><span>OUR PORTFOLIO</span></h1>
          </div>
          <div className='portfolio_content'>
               <div className="col-8">
                   <img  className='iapple' src={img6} width={'450px'} height={'700px'} />
                   <h5> The Apple Store</h5>
               </div>
               <div className="col-8">
                <div className='col-9'>
                 <img src={img5} width={"500px"} height={"350px"}  />
                 <h5> Our Photography -Shimla</h5>
                 </div>
               
                 <div className='col-9'>
                 <img src={img8} width={"500px"} height={"350px"}  />
                 <h5>Clients VLog</h5>
                 </div>
                 </div>
                 <div className="col-8">
                 <div className='col-9'>
                  <img src={img9} width={"500px"} height={"350px"}  />
                  <h5>Videography - Singing Event</h5>
                  </div>
               
                  <div className='col-9'>
                  <img src={img10} width={"500px"} height={"350px"}  />
                  <h5>Web Design    </h5>
                 </div>
               </div>
          </div>
       </div>
    </div>
  )
}

export default Portfolio;