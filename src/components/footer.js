import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../stylesheets/home.css';
 class Footer extends Component {
  render() {
    return (
        <footer class="page-footer">
            <div class="container">
                <div class="links">
                <a href="#" style={{padding:10}}>About me</a>
                <a href="#"style={{padding:10}}>Contact me</a>
                <a href="#"style={{padding:10}}>Projects</a>
                </div>
                <div class="social-icons"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-instagram-outline"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a></div>
            </div>
         </footer>
    )
  }
}
export default Footer;