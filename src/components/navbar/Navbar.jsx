import React from "react";
import "./navbar.css"
import {TbWorld}  from 'react-icons/tb';
function Navbar(){
    return(
        <div className="navbar">
          <div className="navbarOne"> <div className="logoName">CARGO DRONES</div></div> 
          <div className="navbarTwo"> 
           <div className="products">Problem</div>
            <div className="resources">Solution</div>
            <div className="support">Services</div>
            </div> 
            <div className="navbarThree">
                <div className="contactUs">Contact Us</div>
                <TbWorld className="worldicon"/>
                </div>
        </div>
    )
}
export default Navbar