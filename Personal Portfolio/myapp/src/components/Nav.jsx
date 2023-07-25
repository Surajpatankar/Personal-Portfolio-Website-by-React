import React from 'react'
import img1 from "../../src/img/logoooo.png";

const Nav = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="navbar_container">
            <ul>
                <div className="navbarleft_logo">
                    { <img src={img1} /*  width={"140px"} height={"40px"}*/ /> }
                </div>
            </ul>
            <ul className="navbarright">
              <li><a href="/#home">HOME</a></li>
              <li><a href="/#services">SERVICES</a></li>
              <li><a href="/#about">ABOUT</a></li>
              <li><a href="#portfolio">PORTFOLIO</a></li>
              <li><a href="/#vip">CLIENTS</a></li>
              <li><a href="/#contact">CONTACT</a></li>
            </ul>
            </div>
        </div>

    </div>
  )
}

export default Nav;