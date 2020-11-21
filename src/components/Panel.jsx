import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Panel extends Component {
  render() {
    return (
      <div style={{marginBottom:"4%"}}>
          <Link to="/"><button className="buttonStyle" style={{width:"25%",marginRight:"5%",fontWeight:"bold",height:"40px"}}>home page</button></Link>
          <Link to="/fevorite"><button className="buttonStyle" style={{width:"25%",fontWeight:"bold",height:"40px"}}>fevorite citys weather</button></Link>
      </div>
    );
  }
}
