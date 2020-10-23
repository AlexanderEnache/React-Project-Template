import React from 'react';
import './App.css';
import Navbar from './components/navbar.component.js'
import Auth from './components/auth.js';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Public from './components/publicpage.component.js';
import Private from './components/privatepage.component.js';
import ProtectedRoute from './protected.route.js';
import Login from './components/login.component.js';
import SignUp from './components/signup.component.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Route exact path="/" component={Public} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <ProtectedRoute exact path="/private" component={Private} />
      </Router>
      <h1>App</h1>
    </div>
  );
}

export default App;
