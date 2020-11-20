import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Panel extends Component {
  render() {
    return (
      <div>
          <Link to="/">home    </Link>
          <Link to="/fevorite">fevorite</Link>
      </div>
    );
  }
}
