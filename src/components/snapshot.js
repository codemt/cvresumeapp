import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../stylesheets/74.css';
 class SnapShot extends Component {
  render() {
    return (
      <div>
           <div class="heading">
                <h1 style={{textAlign:'center'}}> My Skills </h1> 
            </div>
          <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-4">
                    <div class="box"><img src="image1.jpg" alt="Desmond" />
                        <div class="box-heading">
                            <h4 class="title" style={{color:'blue'}}>UI/UX Designing</h4><span class="post"  style={{color:'blue'}}></span></div>
                        <div class="boxContent">
                            <p class="description"  style={{color:'blue'}}>I Have good understanding of Web Design Concepts , and have used a combination of design frameworks to create a great design.</p></div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4">
                    <div class="box"><img src="image2.jpg" alt="Lee-Ann" />
                        <div class="box-heading">
                            <h4 class="title"  style={{color:'blue'}}>Front End Development </h4><span class="post"  style={{color:'blue'}}></span></div>
                        <div class="boxContent">
                            <p class="description"  style={{color:'blue'}}>I am worked on Top Front end Technologies like ReactJS and PHP-Laravel and created stunning front end works.</p></div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4">
                    <div class="box"><img src="image3.jpg" alt="John-John" />
                        <div class="box-heading">
                            <h4 class="title"  style={{color:'blue'}}>Back End Development</h4><span class="post"  style={{color:'blue'}}></span></div>
                        <div class="boxContent">
                            <p class="description"  style={{color:'blue'}}>I have created Back End using NodeJS and ExpressJS and also BackPack laravel , and i am well versed in backend development.</p></div>
                    </div>
                </div>
            </div>
        </div>  
      </div>
    )
  }
}
export default SnapShot;