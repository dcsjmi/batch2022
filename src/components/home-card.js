import React from 'react';
import { Link } from 'react-router-dom';
import './home-card.css'

const homeCard=(props)=> {
    return (
    <div > 
      {console.log(props)}
      <div className="card-home" style={{ 
                backgroundImage: `url(${props.bgImage})`,
                  backgroundPosition: "center",
                  backgroundRepeat:"no-repeat",
                  backgroundSize:"cover"
                 }}>
        <img className="card-icons" src={props.icon} />
        <h5 className="card-message" >{props.message}</h5>
        <Link to={props.pathLink}><button className="btn-7" >
          SEE MORE
        </button></Link>
      </div>
      </div>
    );
  }

  export default homeCard;