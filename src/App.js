import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import createComponent from './components/createComponent';
import editComponent from './components/editComponent';
import indexComponent from './components/indexComponent';
import homeComponent from './components/homeComponent';

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
              <ul className="nav navbar-nav navbar-right">
               <li><p className="navbar-text">Already have an account?</p></li>
               <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><b>Login</b> <span className="caret"></span></a>
                <ul id="login-dp" className="dropdown-menu">
                    <li>
                       <div className="row">
                          <div className="col-md-12">
                            Login via
                            <div className="social-buttons">
                              <a href="#" className="btn btn-fb"><i className="fa fa-facebook"></i> Facebook</a>
                              <a href="#" className="btn btn-tw"><i className="fa fa-twitter"></i> Twitter</a>
                            </div>
                              or
                             <form className="form" role="form" method="post" action="login" acceptCharset="UTF-8" id="login-nav">
                                <div className="form-group">
                                   <label className="sr-only" for="exampleInputEmail2">Email address</label>
                                   <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Email address" required/>
                                </div>
                                <div className="form-group">
                                   <label className="sr-only" for="exampleInputPassword2">Password</label>
                                   <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" required/>
                                   <div className="help-block text-right"><a href="">Forget the password ?</a></div>
                                </div>
                                <div className="form-group">
                                   <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                                </div>
                                <div className="checkbox">
                                   <label>
                                   <input type="checkbox"/> keep me logged-in
                                   </label>
                                </div>
                             </form>
                          </div>
                          <div className="bottom text-center">
                            New here ? <a href="#"><b>Join Us</b></a>
                          </div>
                       </div>
                    </li>
                </ul>
                </li>
              </ul>
            </div>
            <hr />
            </nav>
            <Switch>
                <Route exact path='/' component={homeComponent} />
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
