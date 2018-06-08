import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import createComponent from './components/createComponent';
import editComponent from './components/editComponent';
import indexComponent from './components/indexComponent';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand">lIttleHost</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item"><Link to={'/'} className="nav-link">Home</Link></li>
              <li className="nav-item"><Link to={'/create'} className="nav-link">Create</Link></li>
              <li className="nav-item"><Link to={'/index'} className="nav-link" >List</Link></li>
              <li className="nav-item"><Link to={'/edit/:id'} className="nav-link">Edit</Link></li>
            </ul>
          </div>
          <hr />
          </nav>
          <Switch>
              <Route exact path='/create' component={createComponent} />
              <Route path='/edit/:id' component={editComponent} />
              <Route path='/index' component={indexComponent} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
