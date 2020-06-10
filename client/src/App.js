import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Login from './components/auth/Login';
import Routes from './components/routing/Routes';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <section className='container'>
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar className='grid-columns-2'/>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route component={Routes} />
          </Switch>
          <Footer className='footer'/> 
        </Fragment>
      </Router>
    </Provider>
    </section>
  );
};

export default App;
