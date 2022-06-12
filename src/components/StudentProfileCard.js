import React,{useState} from "react";
import "./StudentProfileCard.css";
import {Card,Container, Row, Col, Modal, Button} from "react-bootstrap";
import gmail from "./../web_design/MainFinal/gmail2.png";
import phone from "./../web_design/MainFinal/phone.png";


const StudentProfileCard = (student) => {
 console.log(student)

    return(
        <>
           
            <div className="card-coordinators mb-3">

                <div className="row no-gutters ">

                    <div className="col-md-5 col-sm-12 col-xs-12 pt-4 st_image">
                        <img className="rounded-rect" src={student.student.image} />
                    </div>

                    <div className="col-md-7 col-sm-12 col-xs-12 content">
                        
                            <h5 className="card-name">{student.student.name}</h5>

                            <div className=" mt-4">
                                <p><strong>Highest Qualification:</strong> {student.student.highQual}</p>
                                <p><strong>Skills:</strong> {student.student.skills}</p>
                            </div>  

                            <div>
                                <p><span><i className="fas fa-envelope "></i></span> {student.student.email}</p>
                                {/*<p><span><i className="fas fa-phone-alt"></i></span> {student.student.mobile}</p>*/}
                            </div>
                    </div>

                    

                </div>
            </div>
        </>
    );
}

export default StudentProfileCard;