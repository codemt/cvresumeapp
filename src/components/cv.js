import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../stylesheets/home.css';
 class CV extends Component {
  render() {
    return (
      <div>
          <section class="portfolio-block cv">
    <div class="container">
        <div class="work-experience group">
            <div class="heading">
                <h2 class="text-center">Work Experience</h2>
            </div>
            <div class="item">
                <div class="row">
                    <div class="col-md-6">
                        <h3>React Native Developer</h3>
                        <h4 class="organization">HNR TECH</h4>
                    </div>
                    <div class="col-md-6"><span class="period" style={{textAlign:'right'}}>10/2013 - 04/2015</span></div>
                </div>
                <p class="text-muted">Google Login - for iOS and Android
                    Redux Implementation for Application State Management.
                    Implementation of Router Flux and React Navigation
                    Upload to Play Store and App Store for iOS
                    Youtube API Workflow , fetching from youtube data api and displaying it.
                    Splash Screen for Android.
                    Created Calculator to Add,Subtract and Divide  numbers.
                    Implemented various UI Components like Native base and Elements.
                    fetched Data from API and displayed
                    Used Asynstorage to get data.
                    Change icon of Android and IOS App.
                    Working with Xcode and Libraries , and solving errors.
                    CodePush - Implmentation to get live updates to the app without uploading to the app store.
                    Error solving in both android and iOS
                </p>
            </div>
            <div class="item">
                <div class="row">
                    <div class="col-6">
                        <h3>ReactJS,MeteorJS and NodeJS Developer</h3>
                        <h4 class="organization">HNR Tech</h4>
                    </div>
                    <div class="col-md-6"><span class="period">05/2015 - 12/2017</span></div>
                </div>
                <p class="text-muted">Created AppHeader , AppBody and AppFooter Component
                    Used Bootstrap Package to use bootstrap for designing components
                    Created Calculator to Add , Subtract , Divide Numbers , using setState and Handleinput functions.
                    React Router
                    Created Login and Signup Using Firebase Authentication.
                    Bootstrap , Jquery and PopperJS.
                    Login and Sign Up System using Google Firebase.
                    MeteorJS Setup and Configuration
                    MongoDB Collections and Usage
                    Publish and Subscribe MongoDB . 
                    implemented React Material UI Components 
                    Form handling to Submit Form Data.
                    Work Done  in Node JS 
                    Created a RESTFUL API of books.
                    using mongodb as database
                    JW Token Generation using ExpressJS
                    user can create a new book , delete a new book , update an existing book using API Get , PUT , POST  API Requests.
                </p>
            </div>
            <div class="item">
                <div class="row">
                    <div class="col-md-6">
                        <h3>PHP - Laravel Developer</h3>
                        <h4 class="organization">HNR Tech</h4>
                    </div>
                    <div class="col-md-6"><span class="period">12/2017</span></div>
                </div>
                <p class="text-muted"> Initial Setup and Configuration
                MVC Workflow 
                Default Login System
                Custom Login System
                Upload Excel/CSV File and Show in Tables.
                Download any given item - on click of a button.
                Integrating a Theme and extending layouts.
                Backpack - Laravel - Creating an Admin Panel for Backend Work.
                Traits and Models
                Fetching Data from API and displaying it..
                </p>
            </div>
        </div>
        <div class="education group">
            <div class="heading">
                <h2 class="text-center">Education</h2>
            </div>
            <div class="item">
                <div class="row">
                    <div class="col-md-6">
                        <h3>MCA</h3>
                        <h4 class="organization">V.E.S Institute of Technology , Chembur</h4>
                    </div>
                    <div class="col-6"><span class="period">09/2005 - 05/2010</span></div>
                </div>
                <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit ultricies, feugiat est sed, efficitur nunc, vivamus vel accumsan dui.</p>
            </div>
            <div class="item">
                <div class="row">
                    <div class="col-md-6">
                        <h3>BCOM</h3>
                        <h4 class="organization">R.A Podar College of Commerce and Economics</h4>
                    </div>
                    <div class="col-md-6"><span class="period">09/2010 - 06/2015</span></div>
                </div>
                <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit ultricies, feugiat est sed, efficitur nunc, vivamus vel accumsan dui.</p>
            </div>
        </div>
        <div class="group">
            <div class="row">
                <div class="col-md-6">
                    <div class="skills portfolio-info-card">
                        <h2>Skills</h2>
                        <h3>HTML</h3>
                        <div class="progress">
                            <div class="progress-bar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: 350}}><span class="sr-only">100%</span></div>
                        </div>
                        <h3>PHP</h3>
                        <div class="progress">
                            <div class="progress-bar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: 250}}><span class="sr-only">90%</span></div>
                        </div>
                        <h3>JavaScript</h3>
                        <div class="progress">
                            <div class="progress-bar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: 275}}><span class="sr-only">80%</span></div>
                        </div>
                        <h3>ReactJS</h3>
                        <div class="progress">
                            <div class="progress-bar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: 275}}><span class="sr-only">80%</span></div>
                        </div>
                        <h3>React-Native</h3>
                        <div class="progress">
                            <div class="progress-bar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: 275}}><span class="sr-only">80%</span></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="contact-info portfolio-info-card">
                        <h2>Contact Info</h2>
                        <div class="row">
                            <div class="col-1"><i class="icon ion-android-calendar icon"></i></div>
                            <div class="col-9"><span>10/10/1990</span></div>
                        </div>
                        <div class="row">
                            <div class="col-1"><i class="icon ion-person icon"></i></div>
                            <div class="col-9"><span>John Smith</span></div>
                        </div>
                        <div class="row">
                            <div class="col-1"><i class="icon ion-ios-telephone icon"></i></div>
                            <div class="col-9"><span>+235 3217 424</span></div>
                        </div>
                        <div class="row">
                            <div class="col-1"><i class="icon ion-at icon"></i></div>
                            <div class="col-9"><span>lorem@email.com</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hobbies group">
            <div class="heading">
                <h2 class="text-center">Hobbies</h2>
            </div>
            <p class="text-center text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras risus ligula, iaculis ut metus sit amet, luctus pharetra mauris. Aliquam purus felis, pretium vel pretium vitae, dapibus sodales ante. Suspendisse potenti. Duis nunc eros.</p>
        </div>
    </div>
</section>
        
      </div>
    )
  }
}
export default CV;