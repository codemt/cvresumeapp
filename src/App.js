import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home';
import Projects from './components/projects';
import CV from './components/cv';
import About from './components/about';
class App extends Component {
  render() {
    return (
      <Router>
          <div>
          <Navbar />
          <Route path="/home" exact strict component={Home} />
          <Route path="/projects" exact strict component={Projects} />
          <Route path="/cv" exact strict component={CV} />
          </div>
      </Router>
    
    );
  }
}

export default App;
