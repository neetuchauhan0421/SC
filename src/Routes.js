import React from 'react';
import Home from './components/authentication/home/index';
import { Redirect, Route, Switch } from 'react-router-dom';
import {useSelector} from 'react-redux';
import Register from './components/authentication/register';
import Login from '../src/components/authentication/login/index';
import Dashboard from '../src/components/dashboard/index';
import ResetPassword from '../src/components/authentication/reset/index';


const Routes = () => {
  
  return (
  <Switch>
    <Route
      exact
      path='/'
      name='Home'
      component={Home}
    />
    <Route
      exact
      path='/login'
      name='Login'
      component={Login}
    />
      <Route
      exact
      path='/register'
      name='Register'
      component={Register}
    />
    <Route
      exact
      path='/dashboard'
      name='Dashboard'
      component={Dashboard}
    />
  <Route
      path='/resetpassword'
      name='Reset Password'
      component={ResetPassword}
    />
   
  </Switch>
);

}

export default Routes;


