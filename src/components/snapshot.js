import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../stylesheets/74.css';
 class SnapShot extends Component {
  render() {
    return (
      <div>
          <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-4">
                    <div class="box"><img src="image1.jpg" alt="Desmond" />
                        <div class="box-heading">
                            <h4 class="title" style={{color:'blue'}}>Desmond</h4><span class="post"  style={{color:'blue'}}>web designer</span></div>
                        <div class="boxContent">
                            <p class="description"  style={{color:'blue'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae libero orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed vestibulum.</p><a href="#" class="read">Read more<i class="fa fa-angle-right"></i></a></div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4">
                    <div class="box"><img src="image2.jpg" alt="Lee-Ann" />
                        <div class="box-heading">
                            <h4 class="title"  style={{color:'blue'}}>Lee-Ann</h4><span class="post"  style={{color:'blue'}}>Sales Manager</span></div>
                        <div class="boxContent">
                            <p class="description"  style={{color:'blue'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae libero orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed vestibulum.</p><a href="#" class="read">Read more<i class="fa fa-angle-right"></i></a></div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4">
                    <div class="box"><img src="image3.jpg" alt="John-John" />
                        <div class="box-heading">
                            <h4 class="title"  style={{color:'blue'}}>John-John</h4><span class="post"  style={{color:'blue'}}>web developer</span></div>
                        <div class="boxContent">
                            <p class="description"  style={{color:'blue'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae libero orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed vestibulum.</p><a href="#" class="read">Read more<i class="fa fa-angle-right"></i></a></div>
                    </div>
                </div>
            </div>
        </div>  
      </div>
    )
  }
}
export default SnapShot;