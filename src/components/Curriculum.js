import React from "react";
import  "./Curriculum.css";
import Header from './Header';
import PageHeader from './PageHeader';
import { Container, Card, Row, Col } from 'react-bootstrap';

const Curriculum = () => {
    return(
        <>

            <section className="container">
                <PageHeader page="Curriculum"/>
            </section>


            <section className="mt-5">
                <Container>
                    <div className="nav_heads">
                        <ul class="nav nav-tabs" id="nav_head" >
                            <li class="active tab_btn"><a className="active btn t_btn" style={{fontSize:"1.1em"}} data-toggle="tab" href="#home">BATCH 2019-2022</a></li>
                            <li className="tab_btn"><a className="btn t_btn" style={{fontSize:"1.1em"}} data-toggle="tab" href="#menu1">BATCH 2020-2022</a></li>
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
                                                    <li>Digital Computer Design</li>
                                                    <li>Discrete Mathematical Structures</li>
                                                    <li>Algorithmic Problem Solving</li>
                                                    <li>Programming in C</li>
                                                    <li>Lab-I(C)</li>
                                                    <li>Lab-II(Personal Computing)</li>
                                                    <li>CBCSE-I</li>
                                                    <li>CBCSS-I</li>
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
                                                <li>Computer Architecture</li>
                                                <li>Theory of Computation</li>
                                                <li>Operating Systems</li>
                                                <li>Object Oriented Programming in C++</li>
                                                <li>Lab-III(C++)</li>
                                                <li>Lab-IV(Shell Programming)</li>
                                                <li>CBCSE-II</li>
                                                <li>CBCSS-II</li>
                                            </ul>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col> 

                        </Row>

                        <Row className="row_second">

                            <Col md={6} sm={6} xs={12} className="d-flex justify-content-center">
                                <Card className="curriculumCard" >
                                    <Card.Body>
                                        <Card.Title className="card_title">
                                                        SEMESTER III
                                        </Card.Title>
                                        <Card.Text >
                                            <ul style={{justifyContent:'center'}}>
                                                <li>Database Management Systems</li>
                                                <li>Software Engineering</li>
                                                <li>Data Structures and Program Design</li>
                                                <li>Analysis and Design of Algorithms</li>
                                                <li>Lab-V(DS+ADA)</li>
                                                <li>Lab-VI(Oracle)</li>
                                                <li>CBCSE-III</li>
                                                <li>CBCSS-III</li>
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
                                                <li>Artificial Intelligence</li>
                                                <li>Computer Graphics</li>
                                                <li>Programming in Java</li>
                                                <li>Data Communication and Networks</li>
                                                <li>Lab-VII(Open GL)</li>
                                                <li>Lab-VIII(Java)</li>
                                                <li>CBCSE-IV</li>
                                                <li>CBCSS-IV</li>
                                            </ul>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>

                        <Row className="row_second">
                            <Col md={6} sm={6} xs={12} className="d-flex justify-content-center">
                                <Card className="curriculumCard" >
                                    <Card.Body>
                                        <Card.Title className="card_title">
                                                        SEMESTER V
                                        </Card.Title>
                                        <Card.Text >
                                            <ul style={{justifyContent:'center'}}>
                                                <li>Compiler Design and System Software</li>
                                                <li>Information Security</li>
                                                <li>Machine Learning and Soft Computing</li>
                                                <li>Minor Project</li>
                                                <li>Lab-IX(CD + Security)</li>
                                                <li>Lab-X (Machine Learning)</li>
                                                <li>CBCSE-V</li>
                                                <li>CBCSS-V</li>
                                            </ul>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={6} sm={6} xs={12} className="d-flex justify-content-center">
                                <Card className="curriculumCard" >
                                    <Card.Body>
                                        <Card.Title className="card_title">
                                                        SEMESTER VI
                                        </Card.Title>
                                        <Card.Text >
                                            <ul style={{justifyContent:'center'}}>
                                                <li>Major Project</li>
                                            </ul>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <div id="menu1" class="tab-pane fade">
      
                            <Row>

                                <Col md={6} sm={6} xs={12} className="d-flex justify-content-center">
                                    <Card className="curriculumCard" >
                                    <Card.Body>
                                        <Card.Title className="card_title">
                                                        SEMESTER I
                                        </Card.Title>
                                            <Card.Text >
                                                <ul style={{justifyContent:'center'}}>
                                                    <li>Digital Logic and Computer Architecture</li>
                                                    <li>Discrete Mathematics</li>
                                                    <li>Algorithm and Program Design</li>
                                                    <li>Database Management Systems</li>
                                                    <li>Lab-I(APD)</li>
                                                    <li>Lab-II(DBMS)</li>
                                                    <li>CBCSE-I</li>
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
                                                    <li>Software Engineering</li>
                                                    <li>Object Oriented Programming</li>
                                                    <li>Advanced Data Structures</li>
                                                    <li>Operating Systems and Shell Programming</li>
                                                    <li>Elective-I</li>
                                                    <li>Lab-III(OOP)</li>
                                                    <li>Lab-IV(ADS+SP)</li>
                                                    <li>CBCSE-II</li>
                                                    <li>CbcsS-I</li>
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
                                                        <li>Data Communication and Networks</li>
                                                        <li>Artficial Intelligence</li>
                                                        <li>Information Security</li>
                                                        <li>Analysis and Design of Algorithm</li>
                                                        <li>Elective-II</li>
                                                        <li>Lab-V(AI)</li>
                                                        <li>Lab-VI(ADA)</li>
                                                        <li>CBCSE-III</li>
                                                        <li>CbcsS-II</li>
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
                                                    <li>Major Project</li>
                                                    
                                                </ul>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            
                            
                    </div>
                </div>
                </Container>
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

export default Curriculum;
