import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import Cpanel from '../cpanel/cpanel';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';
import RegisterLawyer from '../auth/RegisterLawyer';

const Routes = () => {
  return (
    <section className='container default-container align-left'>
      <Alert />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/register-lawyer' component={RegisterLawyer} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/cpanel' component={Cpanel} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
