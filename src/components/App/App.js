import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import DashboardPage from '../../routes/DashboardPage/DashboardPage';
import LandingPage from '../../routes/LandingPage/LandingPage';
import ListItemsPage from '../../routes/ListItemsPage/ListItemsPage';
import ListsPage from '../../routes/ListsPage/ListsPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import SignupPage from '../../routes/SignupPage/SignupPage';
import ListTeamsPage from '../../routes/ListTeamsPage/ListTeamsPage';
import TeamPage from '../../routes/TeamPage/TeamPage';
import Nav from '../Nav/Nav';
import './App.css';

class App extends Component {
  state = {
    user: null
    /*user: {
      id: 1,
      username: "JDenver"
    }*/
  }

  handleSetUser = user => {
    this.setState({user})
  }

  handleClearUser = () => {
    this.setState({user: null})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav onLogOut={this.handleClearUser} />
        </header>
        <main className="App-main">
          <Switch>
            <Route 
              exact
              path={'/'}
              component={LandingPage}
            />
            {/*
            <Route 
              path={'/login'}
              render={routeProps => (
                <LoginPage 
                  setUser={this.handleSetUser}
                  {...routeProps}
                />
              )}
            />
            */}
            <PublicOnlyRoute
              path={'/login'}
              component={LoginPage}
              setUser={this.handleSetUser}
            />
            <PublicOnlyRoute
              path={'/signup'}
              component={SignupPage}
            />
            {/*
            <Route 
              path={'/dashboard'}
              render={routeProps => (
                <DashboardPage 
                  user={this.state.user}
                  {...routeProps}
                />
              )}
            />
            */}
            <PrivateRoute
              path={'/dashboard'}
              component={DashboardPage}
              user={this.state.user}
            />


            {/*
            <Route 
              path={'/list/:list_id/list-items'}
              render={routeProps => (
                <ListItemsPage 
                  {...routeProps}
                />
              )}
            />
            */}
            {/* --- PrivateRoute wasn't passing along the :/list_id param unless {...props} is under the Route  --- */}
            <PrivateRoute
              path={'/list/:list_id/list-items'}
              component={ListItemsPage}
            />


            {/*
            <Route 
              path={'/lists'}
              render={routeProps => (
                <ListsPage 
                  {...routeProps}
                />
              )}
            />
            */}
            <PrivateRoute
              path={'/lists'}
              component={ListsPage}
            />


            <PrivateRoute 
              path={'/teams'}
              component={ListTeamsPage}
            />
            <PrivateRoute 
              path={'/team/list/:list_id'}
              component={TeamPage}
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
