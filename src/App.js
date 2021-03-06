import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Main from "./container/Main";
import Emp from "./container/Emp";
import Food from "./container/Food";
import NewFood from "./container/NewFood";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main} />
          <Route path="/Food" component={Food} />
          <Route path="/Emp" component={Emp} />
          <Route path="/NewFood" component={NewFood} />
        </div>
      </Router>
    )
  }
}

export default App;