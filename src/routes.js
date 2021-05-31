import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import BrandDashboard from './pages/Brand/BrandDashboard';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CustomerDashboard from './pages/Customer/CustomerDashboard';

const Routes = () => (
  <Switch>
    <Redirect exact path="/" to="/register" />
    <Route path="/register">
      <Register />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route exact path="/brands">
      <CustomerDashboard />
    </Route>
    <Route path="/dashboard">
      <BrandDashboard />
    </Route>
  </Switch>
);

export default Routes;
