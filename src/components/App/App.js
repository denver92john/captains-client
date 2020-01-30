import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
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
import store from '../../dummy-store';
import './App.css';

class App extends Component {
  state = {
    //user: null
    user: {
      id: 1,
      username: "JDenver"
    }
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
            <Route 
              path={'/login'}
              render={routeProps => (
                <LoginPage 
                  setUser={this.handleSetUser}
                  {...routeProps}
                />
              )}
            />
            <Route 
              path={'/signup'}
              component={SignupPage}
            />
            <Route 
              path={'/dashboard'}
              //component={DashboardPage}
              render={routeProps => (
                <DashboardPage 
                  user={this.state.user}
                  {...routeProps}
                />
              )}
            />
            <Route 
              path={'/list/:list_id/list-items'}
              //component={ListItemsPage}
              render={routeProps => <ListItemsPage store={store} {...routeProps} />}
            />
            <Route 
              path={'/lists'}
              //component={ListsPage}
              //render={routeProps => <ListsPage store={store} {...routeProps} />}
              render={routeProps => (
                <ListsPage 
                  store={store}
                  user_id={this.state.user.id}
                  {...routeProps}
                />
              )}
            />
            <Route 
              path={'/teams'}
              //component={TeamsPage}
              render={routeProps => <ListTeamsPage store={store} {...routeProps} />}
            />
            <Route 
              path={'/team/list/:list_id'}
              render={routeProps => <TeamPage store={store} {...routeProps} />}
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
