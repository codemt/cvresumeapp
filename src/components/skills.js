import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../stylesheets/home.css';
class Skills extends Component {
  render() {
    return (
      <div>
        <section class="portfolio-block skills">
    <div class="container">
        <div class="heading">
            <h2 style={{textAlign:'center'}}>Special Skills</h2>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="card special-skill-item border-0">
                    <div class="card-header bg-transparent border-0"><i class="icon ion-ios-star-outline"></i></div>
                    <div class="card-body">
                        <h3 class="card-title">Web Design</h3>
                        <p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card special-skill-item border-0">
                    <div class="card-header bg-transparent border-0"><i class="icon ion-ios-lightbulb-outline"></i></div>
                    <div class="card-body">
                        <h3 class="card-title">Interface Design</h3>
                        <p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card special-skill-item border-0">
                    <div class="card-header bg-transparent border-0"><i class="icon ion-ios-gear-outline"></i></div>
                    <div class="card-body">
                        <h3 class="card-title">Photography and Print</h3>
                        <p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
      </div>
    )
  }
}
export default Skills;