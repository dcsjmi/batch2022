import React from "react";
import {Card } from "react-bootstrap";

const CurriculumCard = () => {
    return(
        <>
            <Card style={{ width: '25%', borderRadius:'20px' }}>
                <Card.Body>
                    <Card.Title 
                        style={{width:'90%', background:'blue', color:'white',padding:'5%', 
                                marginTop:'-20%', marginLeft:'-8%', borderRadius:'20px', 
                                fontSize:'2em', textAlign:'center'}}>
                                    Semester 1
                    </Card.Title>
                        <Card.Text >
                            <ul style={{justifyContent:'center'}}>
                                <li>Sub1</li>
                                <li>Sub2</li>
                                <li>Sub3</li>
                                <li>Sub4</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
            </Card>
        </>
    );
}

export default CurriculumCard;