import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';

//components
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Dashboard from './components/layout/Dashboard';
import firebase from './firebase'


function App() {

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        return <Redirect to="/"/>;
      }
    });
  }, [])
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
}



export default App;
