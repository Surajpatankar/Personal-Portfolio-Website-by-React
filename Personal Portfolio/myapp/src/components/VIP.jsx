import React from 'react'
import rich1 from '../../src/img/rich2.jpg'
import rich2 from '../../src/img/rich3.jpg'
import rich3 from '../../src/img/wom1.jpg'
import rich4 from '../../src/img/rich4.jpg'
import rich5 from '../../src/img/rich5.jpg'
import rich6 from '../../src/img/rich6.jpg'
import rich7 from '../../src/img/wom2.jpg'
import rich8 from '../../src/img/rich7.jpg'
import rich9 from '../../src/img/wom3.jpg'
import rich10 from '../../src/img/rich8.jpg'
import rich11 from '../../src/img/wom4.jpg'
import rich12 from '../../src/img/rich9.jpg'
import rich13 from '../../src/img/rich10.jpg'
import rich14 from '../../src/img/wom5.jpg'
import rich15 from '../../src/img/rich3.jpg'


const VIP = () => {
  return (
    <div className='vip' id='vip'>
      <div className="clientt">
         <h1>OUR VIPs</h1>
         <p>These are our clients all over the world which are our 
            VIPs and they collaborate with us blindly because they believe in us</p>
 
         <div className="clienttt">
            <div className="vip-p">
                <img className='richh' src={rich1}  />
                <p>Elon Musk</p>
           </div>  
           <div className="vip-p">   
                <img className='richh' src={rich2} />
                <p>Jeff Bezos</p>
           </div>
           <div className="vip-p">
                <img className='richh' src={rich3} />
                <p>Zendya Harries</p>
           </div>
           <div className="vip-p">
                <img className='richh' src={rich4} />
                <p>Brad Pitt</p>
           </div>
           <div className="vip-p">
                <img className='richh' src={rich5} />
                <p>Bernard Arnault</p>
           </div>
           <div className="vip-p">
                <img className='richh' src={rich6} />
                <p>Bill Gates</p>
           </div>

           <div className="vip-p">
                <img className='richh' src={rich7} />
                <p>Illiena D'cruz</p>
           </div>

           <div className="vip-p">
                <img className='richh' src={rich8} />
                <p>Harry Cook</p>
           </div>
           <div className="vip-p">
                <img className='richh' src={rich9} />
                <p>Hazel Joe</p>
           </div>

           <div className="vip-p">
                <img className='richh' src={rich10} />
                <p>Robert Pattinson</p>
           </div>
           <div className="vip-p">
                <img className='richh' src={rich11} />
                <p>Princy Julliet</p>
           </div>
           <div className="vip-p">
                <img className='richh' src={rich12} />
                <p>Mukesh Ambani</p>
           </div>
           <div className="vip-p">
                <img className='richh' src={rich13} />
                <p>Lara Dutta</p>
           </div>
           <div className="vip-p">
                <img className='richh' src={rich14} />
                <p>Jeff Bezos</p>
           </div>
           <div className="vip-p">
                <img className='richh' src={rich15} />
                <p>Pritie Zinta</p>
           </div>
       </div>    
      </div>
    </div>
  )
}

export default VIP;