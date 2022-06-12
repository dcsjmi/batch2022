import React from 'react';
import "./Coordinators.css";
import PageHeader from './PageHeader';
import CoordinatorsCard from './coordinators_card';

import image_Suraiya from '../web_design/teacher page/faculty/dr_suraiya.jpg';
import image_Ariba from '../web_design/student_page/students_pics/Ariba Ather.jpeg';
import image_Zia from '../web_design/student_page/students_pics/Zia Haider Naqvi.jpg';
import image_Guarav from '../web_design/student_page/students_pics/Batch 2020-2022/Gaurav Jha.jpeg';
import image_Jawed from '../web_design/student_page/students_pics/Jawed Alam.png';
import image_Mahima from '../web_design/student_page/students_pics/Batch 2020-2022/Mahima Negi.jpg';
import image_Bilal from '../web_design/student_page/students_pics/Bilal Ahmad.jpg';
import image_Huda from '../web_design/student_page/students_pics/Batch 2020-2022/Huda.jpg';
import image_Azim from '../web_design/student_page/students_pics/Batch 2020-2022/Azim Ahmad.png';
import image_Jaanbaaz from '../web_design/student_page/students_pics/JaanbaazAkhtar.jpg';
import image_Sana from '../web_design/student_page/students_pics/sana eram.jpg';
import image_Saurabh from  '../web_design/student_page/students_pics/Saurabh Dwivedi.jpg';
// import image_Afnan from  '../web_design/student_page/students_pics/Batch 2020-2022/Shah Afnan Ansari.jpg';
import image_Nikhil from  '../web_design/student_page/students_pics/Batch 2020-2022/Nikhil Joshi.jpg';




import image_Mohit from  '../images/batch_2020-2022/Mohit_Dagar.jfif';
import image_shashank from  '../web_design/student_page/students_pics/Batch 2020-2022/Shashank Bajpai.jpg';
export default function Coordinators() {
    return (
        <>

            <div className="container">

                <PageHeader page="PLACEMENT TEAM - BATCH 2022" />

                <div className="enclose">
                    <div className="coordinators-subheading p-5">PLACEMENT COORDINATOR</div>
                </div>
                <CoordinatorsCard image={image_Suraiya} name="Dr. Suraiya Jabin" num="+91 9810822834" email="sjabin@gmail.com" />

                <div className="enclose">
                    <div className="coordinators-subheading p-5">MAIN TEAM</div>
                </div>
                <div className="box">
                    <CoordinatorsCard image={image_Ariba} name="Ariba Ather" num="+91 78950 80552" email="aribaather46@gmail.com" />
                    <CoordinatorsCard image={image_Jawed} name="Jawed Alam" num="+91 77590 29463" email="zjaweds@gmail.com" />
                </div>
                <div className="box">
                    <CoordinatorsCard image={image_Zia} name="Zia Haider Naqvi" num="+91 99907 66146" email="zianaqvi7@gmail.com" />
                    <CoordinatorsCard image={image_Mahima} name="Mahima Negi" num="+91 98107 22361" email="negi.mahima4@gmail.com" />
                </div>

                <div className="enclose">
                    <div className="coordinators-subheading p-5">SUPPORT TEAM</div>
                </div>
                <div className="box">
                    <CoordinatorsCard image={image_Sana} name="Sana Eram" num="+91 89695 33304" email="sanaeram5@gmail.com" />
                    <CoordinatorsCard image={image_Jaanbaaz} name="Jaanbaaz Akhtar" num="+91 80029 33186" email="jaanbaazakhtar786@gmail.com" />
                </div>
                <div className="box">
                    <CoordinatorsCard image={image_Nikhil} name="Nikhil Joshi" num="+91 88878 94139" email="nikhiljoshi1609@gmail.com" />
                    <CoordinatorsCard image={image_Mohit} name="Mohit Dagar" num="+91 9953953168" email="mohitdagar27999@gmail.com" />
                </div>

                <div className="box">
                    <CoordinatorsCard image={image_shashank} name="Shashank Bajpai" num="+91 97186 63433" email="shashankbajpai.11rpvv@gmail.com" />
                    </div>

                <div className="enclose">
                    <div className="coordinators-subheading p-5" >BROCHURE/PORTFOLIO & WEB DESIGN TEAM</div>
                </div>
                <div className="box">
                    <CoordinatorsCard image={image_Bilal} name="Bilal Ahmad" num="+91 97585 68756" email="bilal0558@gmail.com" />
                    <CoordinatorsCard image={image_Guarav} name="Gaurav Jha" num="+91 95553 26403" email="gauravjha.2405@gmail.com" />
                </div>
                <div className="box">
                    <CoordinatorsCard image={image_Huda} name="Huda" num="+91 72909 30662" email="hudarayeen@gmail.com" />
                    <CoordinatorsCard image={image_Saurabh} name="Saurabh Dwivedi" num="+91 75039 05835" email="sbh.dwivedi07@gmail.com" />
                </div>
                <div className="box">
                    <CoordinatorsCard image={image_Azim} name="Azim Ahmad" num="+91 85741 82346" email="azeem0057@gmail.com" />
                </div>

            </div>
        </>
    )
}
