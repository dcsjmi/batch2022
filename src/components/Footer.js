import React from 'react';
import './Footer.css'
import jamia from '../web_design/MainFinal/logo.png';
import linkedin from  '../web_design/MainFinal/linkedin.png';
import insta from '../web_design/MainFinal/instagram.png';
import email from '../web_design/MainFinal/email.png';
import {Link,useLocation } from 'react-router-dom';

const Footer = ()=> {
       const location=useLocation();        
    
        return(
            <>
            <div className="footer-container">
                <div className={location.pathname==="/"?"footer-top-home":"footer-top"}></div>
                <div className="footer-main">
                    <div  >
                        <img className="footer-image" src={jamia} style={{width:"80%"}}/>
                    </div>

                    <div className="footer-sub-containers">
                        <h3 className="footer-heading">Contact Us :</h3>
                        <div className="footer-social-media"><a style={{textDecoration:"none",color:"white"}} href="https://www.linkedin.com/company/mca-placement-cell" target="_blank"><img src={linkedin}className="social-icons"/><span>www.linkedin.com</span></a></div>
                        {/*<div  className="footer-social-media"><img src={insta} className="social-icons"></img><span>www.instagram.com</span></div>*/}
                        <div className="footer-social-media"><a style={{textDecoration:"none",color:"white"}} href="mailto:placement_website@jmi.com" target="_blank"><img src={email} className="social-icons"></img><span>placement_website@jmi.com</span></a></div>
                        
                    </div>
                    <div className="footer-sub-containers">
                        <h3 className="footer-heading">Placement Coordinators :</h3>
                        <div><a style={{textDecoration:"none",color:"white"}} href="tel:+91 78950 80552"><h5 className="footer-coordinator">Mahima Negi</h5><p style={{fontSize:"12px"}}>+91 98107 22361</p></a></div>
                        <div><a style={{textDecoration:"none",color:"white"}} href="tel:+91 77590 29463"><h5 className="footer-coordinator">Jawed Alam</h5><p style={{fontSize:"12px"}}>+91 77590 29463</p></a></div>
                                              
                    </div><div className="footer-sub-containers">
                        <h3 className="footer-heading">Location :</h3>
                        <div><p style={{whiteSpace: "initial" ,width:"60%"}}>Maulana Mohammad Jauhar Ali Marg,</p><p>Jamia Nagar, New Delhi</p></div>
                        <div><a href="www.jmi.ac.in" target="_blank" style={{textDecoration:"none", color:"white"}}><h5>www.jmi.ac.in</h5></a></div>
                        <div><img></img></div>
                        
                    </div>
                </div>
            </div>
            </>

        );
    }


export default Footer;