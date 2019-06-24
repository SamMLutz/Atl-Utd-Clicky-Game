import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <p className="navbar-brand" href="#">Clicky Game</p>
     
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <p className="nav-item nav-link active" href="#">Click an image to begin <span className="sr-only">(current)</span></p>
           <p className="nav-item nav-link" href="#">Score: {this.props.score} </p>
            <p className="navbar-text">Top Score: {this.props.topScore}</p>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;