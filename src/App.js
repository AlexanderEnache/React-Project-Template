import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar.component.js'
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Public from './components/publicpage.component.js';
import Private from './components/privatepage.component.js';
import ProtectedRoute from './protected.route.js';
import Login from './components/login.component.js';
import SignUp from './components/signup.component.js';
import AddDog from './components/add-dog.component.js';
import FindDogs from './components/find-dogs.component.js';
import Friends from './components/friends.component.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{

  rerender = () => {
    this.forceUpdate();
  }

  render(){
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Route exact path="/" component={Public} />
        <Route exact path="/login" render={(props) => <Login rerender={this.rerender} {...props} />} />
        <Route exact path="/sign-up" component={SignUp} />
        <ProtectedRoute exact path="/private" component={Private} />
        <ProtectedRoute exact path="/add-dog" component={AddDog} />
        <ProtectedRoute exact path="/find-dogs" component={FindDogs} />
        <ProtectedRoute exact path="/friends" component={Friends} />
      </Router>
    </div>
  );
  }
}

export default App;
