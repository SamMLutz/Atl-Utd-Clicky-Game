import React, { Component } from "react";
// import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Clicky Game</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">Click an image to begin <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="#">Score: {this.props.score} </a>
            <a className="nav-item nav-link" href="#">Top Score: {this.props.topScore}  </a>
            {/* <a className="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;