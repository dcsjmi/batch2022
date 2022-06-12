import React from "react";
import  "./Curriculum.css";
import Header from './Header';
import PageHeader from './PageHeader';
import { Container, Card, Row, Col } from 'react-bootstrap';

const MscCurriculum = () => {
    return(
        <>

            <section className="container">
                <PageHeader page="Curriculum"/>
            </section>


            <section className="mt-5">
               
                <Container>
                    <div className="nav_heads">
                        <ul class="nav nav-tabs" id="nav_head" >
                            <li class="active tab_btn"><a className="active btn t_btn" style={{fontSize:"0.8em"}} data-toggle="tab" href="#home">MSC BIOINFORMATICS</a></li>
                        </ul>
                    </div>
                    <div className="tab-content mt-5">
                        <div id="home" class="tab-pane active">
                            <Row>

                                <Col md={6} sm={6} xs={12} className="d-flex justify-content-center">
                                    <Card className="curriculumCard" >
                                    <Card.Body>
                                        <Card.Title className="card_title">
                                                        SEMESTER I
                                        </Card.Title>
                                            <Card.Text >
                                                <ul style={{justifyContent:'center'}}>
                                                    <li>Introduction to Bioinformatics</li>
                                                    <li>Computing Fundamentals</li>
                                                    <li>Programming in C++</li>
                                                    <li>Comparative and Functional Genomics</li>
                                                    <li>Chemoinformatics and Chemogenomics</li>
                                                    <li>Lab-I (Bioinformatics Tools)</li>
                                                </ul>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col md={6} sm={6} xs={12} className="d-flex justify-content-center">
                                    <Card className="curriculumCard" >
                                    <Card.Body>
                                        <Card.Title className="card_title">
                                                        SEMESTER II
                                        </Card.Title>
                                            <Card.Text >
                                                <ul style={{justifyContent:'center'}}>
                                                    <li>Systems Biology</li>
                                                    <li>Biochemistry</li>
                                                    <li>Essential Mathematics & Biostatistics</li>
                                                    <li>Database Management System</li>
                                                    <li>Elective-I</li>
                                                    <li>Lab-III (MySql/Oracle)</li>
                                                    <li>Lab-IV (Systems Biology and Advance Bioinformatics Tools)</li>
                                                </ul>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                          
                            <Row className="row_second">
                                <Col md={6} sm={6} xs={12} className="d-flex justify-content-center">
                                    <Card className="curriculumCard">
                                    <Card.Body>
                                        <Card.Title className="card_title">
                                                        SEMESTER III
                                        </Card.Title>
                                            <Card.Text >
                                                <ul style={{justifyContent:'center'}}>
                                                        <li>NGS Data Analysis</li>
                                                        <li>Structural Bioinformatics and Drug Design</li>
                                                        <li>Programming in R</li>
                                                        <li>Web-based Programming</li>
                                                        <li>Elective-II</li>
                                                        <li>Lab-V (Drug Design + NGS)</li>
                                                        <li>Minor Project</li>
                                                </ul>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col> 

                                <Col md={6} sm={6} xs={12} className="d-flex justify-content-center">
                                    <Card className="curriculumCard" >
                                    <Card.Body>
                                        <Card.Title className="card_title">
                                                        SEMESTER IV
                                        </Card.Title>
                                            <Card.Text >
                                                <ul style={{justifyContent:'center'}}>
                                                    <li>Major Project and Thesis Writing</li>                                                   
                                                </ul>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            
                            
                    </div>
                </div>
                </Container>
            </section>
            
        </>
    );
}

export default MscCurriculum;
