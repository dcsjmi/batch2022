import React from 'react';
import "./Coordinators.css";
import PageHeader from './PageHeader';
import CoordinatorsCard from './coordinators_card';

import image_Suraiya from '../web_design/teacher page/faculty/dr_suraiya.jpg';
import image_zainab from '../images/msc/ZainabTabassum.jpg'
import image_abuzar from "../images/msc/AbuZarKhan.jpg"
import image_adil from '../images/msc/AdilManzoorBhat.jpg'

import image_rahul from '../images/msc/RahulAaric.jpg'
import image_varsha from '../images/msc/varshamittal.JPG'
import image_shahira from '../images/msc/ShahiraKhan.jpeg'

import image_gopal from '../images/msc/GopalNegi.jpg'
import image_deepika from '../images/msc/DeepikaMudgal.jpg'
import image_sana from '../images/msc/SanaKhatoon.jpg'

import image_jatin from '../images/msc/JatinJoshi.JPG'
import image_vrinda from '../images/msc/vrindasharma.jpg'
import image_sourabh from '../images/msc/Sourabh.jpeg'

import image_salman from '../images/msc/MohdSalmanKhan.jpg'
import image_darakshan from '../images/msc/DarakhshanAnjum.jpg'
import image_afsha from '../images/msc/AfshaKhan.jpg'

import image_mudassir from '../images/msc/mudassirhusain.jpg'
import image_nagmi from '../images/msc/NagmiBano.jpg'
import image_salwa from '../images/msc/SalwaSayeed.jpg'

import image_aisha from '../images/msc/AishaAsif.jpg'
import image_saadggee from '../images/msc/Saadgeekoli.jpeg'
import image_robin from '../images/msc/RobinKumar.png'

import image_rohit from '../images/msc/rohitsatyam.jpg'
import image_sahil from '../images/msc/SahilJawed.jpg'
import image_uves from '../images/msc/MohammedUves.jpg'

import image_wancha from '../images/msc/WanchhaMaurya.jfif'
import image_aiman from '../images/msc/AimanNaaz.jpg'
import image_afsar from '../images/msc/AfsarAlam.JPG'

import image_heena from '../images/msc/Heena.jpg'
import image_habiba from '../images/msc/HabibaShahidi.jpg'
import image_sidra from '../images/msc/HabibaShahidi.jpg'

import image_uruz from '../images/msc/uruz.jpg'
import image_srishti from '../images/msc/srishtichaudhary.jpeg'
import image_padmini from '../images/msc/PadminiNayak.JPG'

export default function MscCoordinators() {
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
                    <CoordinatorsCard image={image_rohit} name="Rohit Satyam" num="+91 98709 53351" email="rohitsatyam102@gmail.com" />
                    <CoordinatorsCard image={image_uruz} name="Uruz Shamshi" num="+91 84482 55406" email="uruzshamshi1998@gmail.com" />
                </div>
                <div className="box">
                    <CoordinatorsCard image={image_afsar} name="Afsar Alam" num="+91 98917 82617" email="afsar2004011@st.jmi.ac.in" />
                    <CoordinatorsCard image={image_srishti} name="Srishti Chaudhary" num="+91 83739 07893" email="chaudharysrishti21@gmail.com" />
                </div>

                <div className="enclose">
                    <div className="coordinators-subheading p-5">SUPPORT TEAM</div>
                </div>
                <div className="box">
                    <CoordinatorsCard image={image_wancha} name="Wanchha Maurya" num="+91 88406 26643" email="wanchhaa@gmail.com" />
                    <CoordinatorsCard image={image_sidra} name="Sidra Afaque" num="+91 70071 83518" email="sidrafaque7@gmail.com" />
                </div>
                <div className="box">
                    <CoordinatorsCard image={image_habiba} name="Habbiba Shahidi" num="+91 79799 55782" email="shahidihabiba@gmail.com" />
                    <CoordinatorsCard image={image_heena} name="Heena Essa" num="+91 95994 56287" email="heena.essa@gmail.com" />
                </div>

                <div className="enclose">
                    <div className="coordinators-subheading p-5" >CONTENT & TECHNICAL TEAM</div>
                </div>
                <div className="box">
                    <CoordinatorsCard image={image_padmini} name="Padmini Nayak" num="+91 97735 81228" email="pdmin.nayak@gmail.com" />
                    <CoordinatorsCard image={image_afsha} name="Afsha Khan" num="+91 73630 68490" email="Afshakhanak0912@gmail.com" />
                </div>
                <div className="box">
                    <CoordinatorsCard image={image_aiman} name="Aiman Naaz" num="+91 82185 74766" email="aimannaaz232@gmail.com" />
                    <CoordinatorsCard image={image_robin} name="Robin Tomar" num="+91 95827 61054" email="imrobintomar@gmail.com" />
                </div>

            </div>
        </>
    )
}
