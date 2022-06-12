import React from 'react';
import Myloop from './images';
import './Recruiters.css';
import data from './data';
import Footer from './Footer';
import PageHeader from './PageHeader';

const Recruiters = ()=> {
        return(
            <div className="recruiters-main">
                <PageHeader page="PAST RECRUITERS"/>

               <div className="companies-photos">
                <Myloop/>
                </div>
                <div>
                    <div className="container-past">
                        <PageHeader page="OUR PAST PLACEMENTS"/>
                        
                    
                </div>
               
                {data.past.map(res=>(
                    <div>
                        <div className="past-placements-visuals">

                    
                    <div className="past-placements-visuals-with-graph">
                        {console.log(res)}
                    <div><img className="graph"  src={res.pie}/></div>
                    <div><p className="past-placements-year"> {res.year}</p></div>
                    <div><img className="pie" src={res.graph}/> </div>
                   </div>

                    </div>
                </div>
                ))}
                </div> 
            </div>
        );
    }

export default Recruiters;