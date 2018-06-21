import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
class App extends Component {
  render() {
    return (
      <Router>
          <div>
          <Navbar />
          <Route path="/home" exact strict component={Home} />
          </div>
      </Router>
    
    );
  }
}

export default App;
