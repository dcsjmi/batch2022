import React from "react";
// Bootstrap Components
// import Css file
import "./About.css";
import Header from "./Header";

const About = () => {
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
                      href="#Computer Science"
                    >
                      <strong>
                        <h4>Computer Science</h4>
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
                <h2>Department of Computer Science</h2>
              </strong>
              <br />
              <p>
                The Department of Computer Science is one of the youngest
                constituents units of the Faculty of Natural Sciences. It was
                established in the year 1999 with the objective of producing IT
                professionals of international standard and to primary fulfill
                requirements of booming IT industry and develop researchers. The
                Department offers three postgraduate programs including the
                regular programs MCA and PGDCA, and a self-financed evening
                program M.Sc. (Bioinformatics). In addition, it supports the
                execution of an undergraduate program B.Sc. in terms of teaching
                of Computer Science as a subject.
              </p>

              <p>
                The Department, with the current faculty strength of a
                Professor, one Associate Professor, one Reader and ten Assistant
                Professors sufficiently caters to its requisite teaching and
                research requirements. Moreover, in order to cater to the
                requirements of interdisciplinary courses, guest teachers from
                institutes such as IIT Delhi, AIIMS, National Institute of
                Immunology, Jamia Hamdard University are regularly invited, as
                per requirements.
              </p>
              <p>
                The Department has two modern air-conditioned computing labs, an
                air-conditioned seminar room, a departmental library, four class
                rooms and adequate offices for staff members. The Department has
                also one air-conditioned Research Laboratory for research
                scholars in the Department. The whole Department is connected
                through a LAN in order to provide modern teaching and learning
                environment and fast access to the Internet. In addition, the
                Department has Wi-Fi connectivity. The LAN caters to many
                important computing needs of the Department such as compilers of
                the popular programming languages, RDBMS software (Oracle, SQL
                server), communication facility and Internet facility. All the
                labs, the seminar room, office are connected through LAN. There
                is one Itanium Server with WIN 2003 OS in the lab. One Plasma
                Screen is installed in the Laboratory to demonstrate practical
                works to the students.
              </p>
              <p>
                The Department of Computer Science is an exciting place in which
                the faculty is friendly, well qualified and able to provide a
                supportive environment for students to study.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
