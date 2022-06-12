import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter as Router,Route} from 'react-router-dom';
//importing React Bootstrap Css
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

ReactDOM.render(
  <React.StrictMode>
    <Router basename='batch2022'>
    <ScrollToTop>
    <App />
    <Footer/>
    </ScrollToTop>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
