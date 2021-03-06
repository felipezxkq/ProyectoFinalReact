import logo from './logo.svg';
import './App.css';
import SignIn from './SignIn';
import Menu from './Menu';
import Registro from './Registro'
import { useState, useEffect } from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Switch, Route, Link, Navigate, Redirect } from "react-router-dom";
import { Portal } from '@material-ui/core';

const browserHistory = createBrowserHistory();

function App() {
 

  return (
    <Router history={browserHistory}>
      <Switch>
        <Redirect from="/" exact={true} to="/login" />
        <Route path="/login">
          <SignIn />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/registro">
          <Registro />
        </Route>



        {/* <Route path="/menu" component={<Menu/>} /> */}
      </Switch>


    </Router>



  );
}

export default App;
