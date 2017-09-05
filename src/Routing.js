import React from 'react';

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Login from './Pages/Login';
import Character from './Pages/Character';
import Library from './Pages/Library';
import Storyend from './Pages/Storyend';
import Theme from './Pages/Theme';
import User from './Pages/User';
import OneOne from './Pages/Storyboard/one-one';
import TwoOne from './Pages/Storyboard/two-one';
import TwoTwo from './Pages/Storyboard/two-two';
import TwoThree from './Pages/Storyboard/two-three';
import TwoFour from './Pages/Storyboard/two-four';
import TwoFive from './Pages/Storyboard/two-five';

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
        <Route path="/two-one" exact component={TwoOne} />
        <Route path="/two-two" exact component={TwoTwo} />
        <Route path="/two-three" exact component={TwoThree} />
        <Route path="/two-four" exact component={TwoFour} />
        <Route path="/two-five" exact component={TwoFive} />

        <Redirect from=" " to="/" />


        {/*<Redirect from="/figures" to="/" />*/}
      </Switch>
    </Router>
  );
}