import React from 'react';
import {Route, Link, HashRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';

require('dotenv').config();

function App() {

  return (
      <HashRouter basename="/">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
      </HashRouter>
    );
}

const About = () => <div><h2>About</h2></div> 

export default App;

