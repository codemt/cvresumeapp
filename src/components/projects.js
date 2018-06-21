import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../stylesheets/box-effect.css';
 class Projects extends Component {
  render() {
    return (
        <div style={{paddingTop:100}}>
        <div class="container">
        <div class="row">
            <div class="col-sm-6 col-md-4">
                <div class="box">
                    <div class="box-img"><img src="img-1.jpg" alt="Williamson" style={{width:289,height:289}} /></div>
                    <div class="box-content">
                        <h4 class="title">Williamson</h4>
                        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae libero orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed vestibulum.</p>
                        <ul class="social-links">
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-4">
                <div class="box">
                    <div class="box-img"><img src="image2.jpg" alt="Williamson" style={{width:289,height:289}} /></div>
                    <div class="box-content">
                        <h4 class="title">Miranda<br /></h4>
                        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae libero orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed vestibulum.</p>
                        <ul class="social-links">
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-4">
                <div class="box">
                    <div class="box-img"><img src="image3.jpg" alt="Williamson"  style={{width:289,height:289}}/></div>
                    <div class="box-content">
                        <h4 class="title">Thomas<br /></h4>
                        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae libero orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed vestibulum.</p>
                        <ul class="social-links">
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
  }
}
export default Projects;