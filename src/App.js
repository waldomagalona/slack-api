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

import React, { useState, useEffect } from 'react';
import LogInForm from './components/login/LogInForm';
import RegistrationForm from './components/registration/RegistrationForm';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainPage from './components/main/MainPage';



function App() {
  const [user, setUser]= useState();
  const [headers, setHeaders] = useState();

  useEffect(() => {
    
    const loggedInUser = localStorage.getItem("user");
    const userHeader = localStorage.getItem("headers");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      const foundHeader = JSON.parse(userHeader);
      setUser(foundUser);
      setHeaders(foundHeader);
    }
  }, []);

  

  function logOut(){
    setUser();
    localStorage.clear();
   
  }
  

  function saveUser(response){
    setUser(response.data)
    setHeaders(response.headers)
    localStorage.setItem("user",JSON.stringify(response.data))
    localStorage.setItem("headers",JSON.stringify(response.headers))
  
  }
console.log(headers)
  return (
    <Router>
    
      <Switch>
        <Route exact path="/">
          {(user)?
          (<MainPage
          headers={headers}
          logOut={logOut} />)
          :
          (<LogInForm 
          saveUser={saveUser}
          />)}
        </Route>
        <Route path="/register">
          <RegistrationForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
