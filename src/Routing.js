import React from 'react';

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Login from './Pages/Login';
import Character from './Pages/Character';
import Library from './Pages/Library';
import Storyend from './Pages/Storyend';
import Theme from './Pages/Theme';
import User from './Pages/User';
import OneOne from './Pages/Storyboard/one-one'

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Character" exact component={Character} />
        <Route path="/Library" exact component={Library} />
        <Route path="/Storyend" exact component={Storyend} />
        <Route path="/Theme" exact component={Theme} />
        <Route path="/User" exact component={User} />
        <Route path="/User" exact component={User} />
        <Route path="/one-one" exact component={OneOne} />

        {/*<Redirect from="/figures" to="/" />*/}
      </Switch>
    </Router>
  );
}