import React, {useState} from "react";
import  "./StudentProfile.css";
import Header from './Header';
import PageHeader from './PageHeader';
import { Container, Modal, Button, Card, Row } from "react-bootstrap";
import jpic from "./../web_design/student_page/students_pics/JaanbaazAkhtar.jpg";
import Profile from './StudentProfileCard';
import data3 from './data_student_msc_batch';

const MscStudentProfile = () => {

    const mscData = data3.students_msc_batch.map((item, index)=>(
        <Profile student={item} key={index}/>
    ));

    return(
        <>
            <section className="container">
                <PageHeader page="Student Profile"/>
            </section>

            <section className="mt-5">
                <Container>
                    <div className="nav_heads">
                        <ul className="nav nav-tabs" id="nav_head" >
                            <li className="active tab_btn"><a className="btn t_btn active" style={{fontSize:"0.8em"}} data-toggle="tab" href="#home"><div className="vert">MSC BIOINFORMATICS</div></a></li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div id="home" className="tab-pane active">

                            <Row>
                                {mscData} 
                            </Row>    
                        </div>
                    </div>
                </Container>
            </section>
            
        </>
    );
}

export default MscStudentProfile;
