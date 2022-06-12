import React from 'react';
import "./coordinators_card.css";
import "./Faculty.css";




const CoordinatorsCard = props => {
    return (
        <div className="card-coordinators mb-3">

            <div className="row no-gutters ">

                <div className="col-md-12 col-xs-12 col-lg-4 card-image">
                    <img className="rounded-rect" src={props.image} />
                </div>

                <div className="col-md-12 col-xs-12 col-lg-8">
                    
                        <h5 className="card-name">{props.name}</h5>

                        <p className="card-num mt-4"> <i className="fas fa-phone-alt"></i>&nbsp;&nbsp;&nbsp;{props.num}</p>

                        <p className="card-email"><i className="fas fa-envelope "></i>&nbsp;&nbsp;&nbsp;{props.email}</p>
                    
                </div>

            </div>
        </div>

    )
}


export default CoordinatorsCard;
