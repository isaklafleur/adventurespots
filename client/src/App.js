import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import injectTapEventPlugin from "react-tap-event-plugin";

// Components
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import SpotMap from "./components/SpotMap";
import SignUpPage from "./components/containers/SignUpPage";
import LoginPage from "./components/containers/LoginPage";
import DashboardPage from "./components/containers/DashBoardPage";
import NotFound from "./components/NoteFound";
import Auth from "./modules/Auth";
import "./styles/App.css";

injectTapEventPlugin();

const handleLogout = event => {
  Auth.deauthenticateUser();
  this.props.history.push("/login");
};

const isLoggedIn = event => {
  if (Auth.isUserAuthenticated()) {
    this.props.history.push(DashboardPage);
  } else {
    this.props.history.push(HomePage);
  }
};

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={isLoggedIn} />
              <Route path="/spotmap" component={SpotMap} />
              <Route path="/dashboard" component={DashboardPage} />
              <Route path="/signup" component={SignUpPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/logout" component={handleLogout} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
