import React from 'react';
import PageHeader from './PageHeader';
import { Accordion ,Card} from 'react-bootstrap';
import './Contact.css';
import contactImage from '../images/20943953.png';
import send from "../web_design/MainFinal/send.png"

function Faq() {
    return (
        <>
          <section className="container">
            <PageHeader page="CONTACT US"/>
          </section>
          <div className="contact__container">
              <div className=" contact__card ">
                    <div className="main-container-form">
                      <div className="image-container ">
                        <img src={contactImage} alt="" width="100%" height="100%" />
                      </div>
                      <div className="contact__form ">
                        <div className="form-group ">
                          <form action="https://formsubmit.co/sanaeram5@gmail.com" method="POST">
                            <div className="">
                              <label for="name">Name</label>
                                <input type="text" name="name" required />
                              
                            </div>
                            <div className="">
                              <label for="email">E-mail</label>
                                <input type="email" name="email" required  />
                              
                            </div>
                            <div style={{marginBottom:"1em"}}>
                              <label for="message">Message
                                <textarea name="message" style={{width:"150%",border:'none', borderBottom:'1px solid gray'}}></textarea>
                              </label>
                            </div>
                            <button className="btn btn-primary" type="submit" style={{width:'50%'}}>Send <span className="pl-1"><img src={send} width="22px"/></span></button>
                          </form>
                        </div>
                      </div>
                    </div>
              </div>
          </div>
          <div className="container-fluid faq__container d-flex justify-content-center ">
            <div className="card faq__card pt-5 pb-5" style={{width:'60%'}}>
            <div class="faq">
            <Accordion defaultActiveKey="0" style={{width:'90%', paddingLeft:'10%', alignItems:'center'}}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                How to gain more information about JMI or Department's?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>To know more about Jamia Millia Islamia: <a href="http://jmi.ac.in" target="blank">jmi.ac.in </a></Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                More about Dept. of Computer Science
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>To know more about the Department of Computer Science: <a href="https://www.jmi.ac.in/computerscience" target="blank">Click Here </a></Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                Placement Brochure
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body><a href="brochure/BrochureReborn.pdf" download>Download the Placement Brochure</a> of the Department of Computer Science, MCA Batch of 2022.</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                How to reach / contact DCS?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body><div>Department of Computer Science,<br/>
                    Jamia Millia Islamia,<br/>
                    Jamia Nagar,<br/>
                    New Delhi-110025<br/>
                    Email: computerscience@jmi.ac.in<br/></div>
                    </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            </div>  
            </div>
          </div>
          
        </>
    )
}

export default Faq;