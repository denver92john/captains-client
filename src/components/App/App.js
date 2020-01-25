import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import DashboardPage from '../../routes/DashboardPage/DashboardPage';
import LandingPage from '../../routes/LandingPage/LandingPage';
import ListItemsPage from '../../routes/ListItemsPage/ListItemsPage';
import ListsPage from '../../routes/ListsPage/ListsPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import NotFoundPage from '../../routes/LoginPage/LoginPage';
import SignupPage from '../../routes/SignupPage/SignupPage';
import TeamsPage from '../../routes/TeamsPage/TeamsPage';
import Nav from '../Nav/Nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
        <main className="App-main">
          <Switch>
            <Route 
              exact
              path={'/'}
              component={LandingPage}
            />
            <Route 
              path={'/dashboard'}
              component={DashboardPage}
            />
            <Route 
              path={'/list-items'}
              component={ListItemsPage}
            />
            <Route 
              path={'/lists'}
              component={ListsPage}
            />
            <Route 
              path={'/login'}
              component={LoginPage}
            />
            <Route 
              path={'/signup'}
              component={SignupPage}
            />
            <Route 
              path={'/teams'}
              component={TeamsPage}
            />
            <Route 
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
