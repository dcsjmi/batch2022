import React from "react";
// Bootstrap Components
// import Css file
import "./About.css";
import Header from "./Header";

const Msc = () => {
  return (
    <div>
      <div class="container">
        <div className="row">
          <div className="col-md-3 col-xs-3">
            <div className="panel panel-primary sidebar">
              <div className="panel-body no-padding">
                <div className="list-group scroll">
                  <div id="department">
                    <a
                      className="sublist list-group-item no-vertical-border"
                      href="/mscstudent_profile"
                    >
                      <strong>
                        <h4>Student Profile</h4>
                      </strong>
                    </a>
                    <a
                      className="sublist list-group-item no-vertical-border"
                      href="/msccurriculum"
                    >
                      <strong>
                        <h4>Curriculum</h4>
                      </strong>
                    </a>
                    <a
                      className="sublist list-group-item no-vertical-border"
                      href="/msccoordinators"
                    >
                      <strong>
                        <h4>Placement Team</h4>
                      </strong>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9 col-xs-9">
            <div id="Computer Science">
              <br />
              <br />
              <strong>
                <h2>MSC Bioinformatics</h2>
              </strong>
              <br />
              <p>
              Master of Science in Bioinformatics i.e. M.Sc. Bioinformatics is a 2 year (4 semesters) academic, self-financed and evening programme of professional nature. Dr Syed Ismail Ahson took an initiative and started this course during his tenure as the Head of the Department of Computer Science (2001 - 2008). 
              </p>

              <p>
              The primary aim of this programme is to prepare biological science graduates with bioinformatics skills for a career in the Post-Genomics era. It is also suitable for especially inspired aspirants from other backgrounds. The programme focuses on helping students build a strong foundation in biotechnology, database management, data mining, statistics, computational mathematics, computer programming, and prepare them for productive careers in fields of bioinformatics, biotechnology, pharmaceutical, and vaccine industries.
              </p>
              <p>
              The programme is designed to equip the students with all the skills required to be a bioinformatician. Programming languages like Python, R, C++, SQL, HTML, PHP, CSS, & JavaScript are taught. To build a strong biological background students are taught Genomics, Molecular Biology, & Biochemistry. To keep up with the current demand the programme ensures that our students have a good grasp on NGS. In order to cater to the requirements of this interdisciplinary course, guest teachers from institutes such as IIT-D, AIIMS, NII, Jamia Hamdard are regularly invited.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Msc;
