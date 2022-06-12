import React, { Component } from "react";
import './Images.css'

// const images=[
//     {
//         for(let i=1;i<=54;i++)
//         {id:i,src:""}
//     }
// ];


class Myloop extends Component {
  constructor(props) {
    super(props);
    this.state = { listOfImages: [] };
  }
  importAll(r) {
    return r.keys().map(r);
  }

  componentWillMount() {
    const list = this.importAll(
      require.context("../web_design/past_placement/logo", false, /\.(png)$/)
    );
    this.setState({
      listOfImages: list
    });
  }
  render() {
      
    return (
      <div className="row">
            {this.state.listOfImages.map((image, index) => {
                
              return <div className="column">
                <img className="companies-logo"  src={image.default} key={index} alt="info"></img>
                </div>
  })}
      </div>
    );
  }
}


export default Myloop;