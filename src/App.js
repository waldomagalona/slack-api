//TODO:
// Registration
// Login
// Send Message
// Retrieve Message
// Create Channel
// Get all users
// Get channel details via channel ID
// Add member to a channel
// List of All Users

import React, { useState } from 'react';
import LogInForm from './components/login/LogInForm';
import RegistrationForm from './components/registration/RegistrationForm';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import MainPage from './components/main/MainPage';
import Spinner from 'react-bootstrap/Spinner';

function App() {
  const [capturedResponse, setCapturedResponse] =useState({})
  const [isLoggedIn, setIsLoggedIn]= useState(false);
  

  function toggleIsLoggedIn(){
    setIsLoggedIn(!isLoggedIn)
  }

  function passResponse(data){
		setCapturedResponse(data)
	}

  return (
    <Router>
    
      <Switch>
        <Route exact path="/">
          {isLoggedIn?
          (<MainPage 
          response = {capturedResponse}
          toggleIsLoggedIn={toggleIsLoggedIn} />)
          :
          (<LogInForm 
          passResponse={passResponse}
          toggleIsLoggedIn={toggleIsLoggedIn} />)}
        </Route>
        <Route path="/register">
          <RegistrationForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
