import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Coordinators from './components/Coordinators';
import Courses from './components/Courses';
import Faculty from './components/Faculty';
import Faq from './components/Faq';
import Message from './components/Message';
import Recruiters from './components/Recruiters';
import StudentProfile from './components/StudentProfile';
import Curriculum from './components/Curriculum';
import Msc from './components/Msc';
import MscCurriculum from './components/MscCurriculum';
import MscStudentProfile from './components/MscStudentProfile';
import MscCoordinators from './components/MscCoordinators';

const App=()=>{
    return(
      <>
        <Header/>
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={About}/>
            <Route path="/msc" exact component={Msc}/>
            <Route path="/contact" exact component={Contact}/>
            <Route path="/coordinators" exact component={Coordinators}/>
            <Route path="/msccoordinators" exact component={MscCoordinators}/>
            <Route path="/faculty" exact component={Faculty}/>
            <Route path="/faq" exact component={Faq}/>
            <Route path="/message" exact component={Message}/>
            <Route path="/recruiters" exact component={Recruiters}/>
            <Route path="/student_profile" exact component={StudentProfile}/>
            <Route path="/mscstudent_profile" exact component={MscStudentProfile}/>
            <Route path="/curriculum" exact component={Curriculum}/>
            <Route path="/msccurriculum" exact component={MscCurriculum}/>
      </>
    )
};

export default App;