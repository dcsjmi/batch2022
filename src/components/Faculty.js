import React from "react";
import "./Faculty.css";
import Data from "./data";
import Header from "./Header";
import PageHeader from './PageHeader';

const Faculty = () => {
  return (
    <div>
        <div className="container">

          <PageHeader page ="Faculty Profile" />   
          <div className="row my-4">
            {Data.faculty.map(res => (

              <div className="col-md-4 col-sm-6 col-xs-12 my-4">
                <div class="card faculty-card" style={{ textAlign: "center" }}>
                  
                  <img className="faculty-img rounded-circle" src={res.image} alt="" />

                  <div className="card-body" style={{ marginTop: -10, fontWeight:500 }}>
                    <div className="faculty-name">{res["faculty-name"]}</div>
                    <div className="faculty-designation">{res["faculty-designation"]}</div>
                    <div className="faculty-exp pt-2">{res["faculty-exp"]}</div>
                    <div className="faculty-specialization">Areas of Specialization :</div>
                    <div className="spacial-in">{res["special-in"]}</div>
                  </div>

                </div>
              </div>
            ))
            }
          </div>

          <div className="non-teaching-staff">
            <div className="non-teaching-heading">NON TEACHING STAFF</div>
            <div className="d-flex justify-content-center">
              <ul>
                <li>Dr. Israr Ahmed (Programmer)</li>
                <li>Mr. Shravan Kumar Yadav</li>
                <li>Mr. Syed Nafil</li>
                <li>Mr. Abdul Latief</li>
                <li>Mr. Ziaullah Siddiqui</li>
                <li>Mr. Abdul Aziz</li>
                <li>Mr. Sayed Mohammad Ali</li>
                <li>Mr. Hasan Mujtaba</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

  )
}

export default Faculty;
