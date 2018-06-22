import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../stylesheets/projects.css';
import Footer from './footer';
 class Projects extends Component {
  render() {
    return (
        <div>
        <section class="portfolio-block project-no-images">
    <div class="container">
        <div class="heading">
            <h2>Recent Work</h2>
        </div>
        <div class="row">
            <div class="col-md-6 col-lg-4">
                <div class="project-card-no-image">
                    <h3>Youtube Channel App.</h3>
                    <h4>I have created a Youtube channel App where the videos of the youtube channel can be directly played from the app using Youtube API .</h4><a class="btn btn-outline-primary btn-sm" role="button" href="https://play.google.com/store/apps/details?id=com.tpl">See More</a>
                    <div class="tags"><a href="#">React-Native</a></div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="project-card-no-image">
                    <h3>News Reader App</h3>
                    <h4>A News Reader App , to read business news from india , america , England and Canada.Using a News API to Display the News.</h4><a class="btn btn-outline-primary btn-sm" role="button" href="https://play.google.com/store/apps/details?id=com.hnrtech.newsglobal">See More</a>
                    <div class="tags"><a href="#">React-Native</a></div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="project-card-no-image">
                    <h3>School Website - Theme</h3>
                    <h4>Created a School Website theme  , using ReactJS. It Displays dummy data of school with various components.</h4><a class="btn btn-outline-primary btn-sm" role="button" href="#">See More</a>
                    <div class="tags"><a href="#">React.JS</a></div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="project-card-no-image">
                    <h3>Guitar Lessons App.</h3>
                    <h4>A Basic Guitar Lessons App , to Learn Guitar. Created in React Native using youtube API.</h4><a class="btn btn-outline-primary btn-sm" role="button" href="#">See More</a>
                    <div class="tags"><a href="#">React-Native</a></div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="project-card-no-image">
                    <h3> BookStore API - ExpressJS</h3>
                    <h4>Created a Book Store API using ExpressJS Framework to fetch , delete , insert books.</h4><a class="btn btn-outline-primary btn-sm" role="button" href="#">See More</a>
                    <div class="tags"><a href="#">NODE.JS</a></div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="project-card-no-image">
                    <h3>Login With Google Firebase</h3>
                    <h4>Created a Login App with Google Firebase.</h4><a class="btn btn-outline-primary btn-sm" role="button" href="#">See More</a>
                    <div class="tags"><a href="#">React.JS</a></div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="project-card-no-image">
                    <h3>MeteorJS - Information App using MongoDB</h3>
                    <h4>Created a Information App using MongoDB in MeteorJS</h4><a class="btn btn-outline-primary btn-sm" role="button" href="#">See More</a>
                    <div class="tags"><a href="#">React.JS</a></div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="project-card-no-image">
                    <h3>TodoList - Application</h3>
                    <h4>Created a TodoList Application using ReactJS and Google Firebase.</h4><a class="btn btn-outline-primary btn-sm" role="button" href="#">See More</a>
                    <div class="tags"><a href="#">React.JS</a></div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="project-card-no-image">
                    <h3>Wedding Concept App - Application</h3>
                    <h4>An Application to Digitalize a Wedding Invitation.</h4><a class="btn btn-outline-primary btn-sm" role="button" href="https://github.com/codemt/login-react-native-firebase">See More</a>
                    <div class="tags"><a href="#">React.JS</a></div>
                </div>
            </div>
        </div>
    </div>
</section>
<Footer />
</div>

    )
  }
}
export default Projects;