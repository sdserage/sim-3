import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
// import Search from './components/Search/Search'
// import Profile from './components/Profile/Profile'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div >
          <Switch>
            <Route component={Login} exact path='/' />
            {/* <Route component={Profile} path='/profile' /> */}
            {/* <Route component={Search} path='/search' /> */}
            <Route component={Dashboard} path='/dashboard' />
          </Switch>
        </div>
      </HashRouter>

    );
  }
}

export default App;
