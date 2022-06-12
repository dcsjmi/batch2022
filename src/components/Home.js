import React from "react";
import "./Home.css";
import logo from "../web_design/MainFinal/logo.png";
import ghalib from "../web_design/MainFinal/galib.jpg";
import data from "./data";
import HomeCard from "./home-card";
import { Link } from "react-router-dom";

const Home=()=> {
  
  return (
    
    <div className="home-body">
     <div style={{backgroundColor:"white"}}>
        <div
        className="container-fluid d-flex flex-column justify-content-center align-items-center"
        id="hero">
        <div
          className="container-fluid d-flex flex-column justify-content-center align-items-center py-5"
          id="content"
        >
          <div className="row-fluid text-align-center">
            <img className="img-fluid" src={logo} style={{position:"relative"}} />
          </div>
          <div className=" text-align-center">
            <p style={{fontSize:"50px",fontFamily:"Times New Roman",fontWeight:"lighter",color:"white"}}>MASTER OF COMPUTER APPLICATIONS</p>
          </div>
          <div className="row-fluid text-align-center">
            <h2 style={{fontWeight:"lighter",whiteSpace:"initial"}}>DEPARTMENT OF COMPUTER SCIENCE</h2>
          </div>
          <div className="row-fluid text-align-center">
            <h2>JAMIA MILLIA ISLAMIA</h2>
          </div>
        </div>
      </div>
      </div>
      <div className="row mid-home-container p-5" >
        <div className="col-md-6 col-sm-12 col-xs-12" style={{paddingRight:"5vh"}} id="ghalib" >
          <img className="img-fluid" src={ghalib}  />
        </div>
        <div className="col-md-6 col-sm-12 col-xs-12">
            <div style={{width:"70%",paddingLeft:'25px'}} id="aboutHeading">
              <h4>About</h4>
              <h4 >JAMIA MILLIA ISLAMIA</h4>
            </div>
          <div style={{width:"100%"}} className=" py-4  " id="aboutContent">
            <p>
              Jamia Millia Islamia, established in 1920, is a prestigious
              Central University, located in New Delhi and accredited by NAAC
              under category A. It is an autonomous institution established by
              an act of Parliament and Hon’ble President of India as its
              visitor. Being the embodiment of visionaries like Mahatma Gandhi,
              Moulana Mohammad Ali Jauhar and Dr. Zakir Hussain, this national
              institute epitomizes synthesis of ancient wisdom and modern
              scientific temper.The model of education conceived and enriched by
              its illustrious founder offers refreshing perspective to young
              minds and facilitates the accomplishments of their talents. The
              national ethos of Jamia Millia Islamia is reflected in its richly
              diverse students and teaching community transcending regional,
              ingual, religious, and even national boundaries. Jamia Millia
              Islamia has already played an important role during the Common
              Wealth Games and TOYOTA University Cricket Championship held in
              October 2010 and 2013, respectively.
            </p>
          </div>
          <div className=" pt-3" style={{width:"50%",fontWeight:"lighter",fontFamily:"Roboto"}}>
              <Link to="/about"><button className="aboutButton">
                GO TO WEBSITE
              </button></Link>
          </div>
        </div>
      </div>
      <div className="p-4 mt-5 homestyleCard">
        <div className="optionContainer">
          
            {data.home.map(res=>
            <div className="home-card-box ">
            <HomeCard
              id={res.id}
              icon={res.icon}
              message={res.message}
              bgImage={res.bgImage}
              pathLink={res.pathLink}

            /> </div>)}
         
        </div>
      </div>
    </div>
  );
}

export default Home;
