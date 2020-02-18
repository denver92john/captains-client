import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import DashboardPage from '../../routes/DashboardPage/DashboardPage';
import LandingPage from '../../routes/LandingPage/LandingPage';
import NamesPage from '../../routes/NamesPage/NamesPage';
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
            <PublicOnlyRoute
              path={'/login'}
              component={LoginPage}
              setUser={this.handleSetUser}
            />
            <PublicOnlyRoute
              path={'/signup'}
              component={SignupPage}
            />
            <PrivateRoute
              path={'/dashboard'}
              component={DashboardPage}
              user={this.state.user}
            />
            {/* --- PrivateRoute wasn't passing along the :/list_id param unless {...props} is under the Route  --- */}
            <PrivateRoute
              path={'/list/:list_id/list-items'}
              component={NamesPage}
            />
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
