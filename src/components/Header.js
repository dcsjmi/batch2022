import React, {useState} from "react";
import './Header.css';
import {Link} from "react-router-dom";
import jamia from '../web_design/MainFinal/logo.png'

    
  
    const Header =()=>{
      const [isMobile, setIsMobile] = useState(false);
    return(
      <>
        <nav className=" navbar navbar-lightstyle" style={{background:"#09526F"}}  expand="md">
          <img className="logo" src={jamia} width="30px"/>
          <ul className={isMobile? "nav-links-mobile":"nav-links"} onClick={()=>setIsMobile(false)} >
            <Link to="/" className="nav-item">
              <li>Home</li>
            </Link>
            <Link to="/about" className="nav-item">
              <li>About</li>
            </Link>
            <Link to="/msc" className="nav-item">
              <li>MSC Bioinformatics</li>
            </Link>
            <Link to="/student_profile" className="nav-item">
              <li>Student Profile</li>
            </Link>
            <Link to="/curriculum" className="nav-item">
              <li>Curriculum</li>
            </Link>
            <Link to="/recruiters" className="nav-item">
              <li>Past Recruiters</li>
            </Link>
            <Link to="/message" className="nav-item">
              <li>Message Corner</li>
            </Link>
            <Link to="/coordinators" className="nav-item">
              <li>Placement Team</li>
            </Link>
            <Link to="/contact" className="nav-item">
              <li>Contact Us</li>
            </Link>
          </ul>
          <button className="mobile-menu-icon" onClick={()=> setIsMobile(!isMobile)}>
            {isMobile ? (<i className="fas fa-times"></i>) : (<i className="fas fa-bars"></i> )}
          </button>
        </nav>
      </>
      );
  }

export default Header;