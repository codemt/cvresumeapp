import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../stylesheets/navbar.css';
class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
            <div className="container"><a href="#" className="navbar-brand logo">Brand</a><button data-toggle="collapse" data-target="#navbarNav" className="navbar-toggler"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse"
                    id="navbarNav">
                    <ul className="nav navbar-nav ml-auto">
                        <li role="presentation" className="nav-item"><a href="index.html" className="nav-link active">Home</a></li>
                        <li role="presentation" className="nav-item"><a href="projects-compact-grid.html" className="nav-link">Projects</a></li>
                        <li role="presentation" className="nav-item"><a href="project-page.html" className="nav-link">Project Page</a></li>
                        <li role="presentation" className="nav-item"><a href="cv.html" className="nav-link">CV</a></li>
                        <li role="presentation" className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                        <li role="presentation" className="nav-item"><a href="hire-me.html" className="nav-link">Hire me</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        
      </div>
    )
  }
}

export default NavBar;