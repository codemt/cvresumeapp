import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../stylesheets/home.css';
import { Jumbotron, Button } from 'reactstrap';
import MyPic from '../images/mypic.jpeg';
 class Home extends Component {
  render() {
    return (
        <div>
        <Jumbotron style={{backgroundColor:'#fff'}}>
        <section class="portfolio-block block-intro">
            <div class="container">
                <div class="avatar" style={{backgroundImage: `url(${MyPic})`}}></div>
                <div class="about-me">
                    <p>Hello! I am<strong>John Smith</strong>. I work as interface and front end developer. I have passion for pixel perfect, minimal and easy to use interfaces.</p><a class="btn btn-outline-primary" role="button" href="#">Hire me</a></div>
            </div>
</section>
        </Jumbotron>
      </div>
    )
  }
}
export default Home;