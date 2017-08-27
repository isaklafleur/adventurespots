import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import injectTapEventPlugin from "react-tap-event-plugin";

// Components
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import SpotMap from "./components/SpotMap";
import Test from "./components/Test";
import SignUpPage from "./components/containers/SignUpPage";
import LoginPage from "./components/containers/LoginPage";
import DashboardPage from "./components/containers/DashBoardPage";
// import Logout from "./components/Logout";
import NotFound from "./components/NoteFound";
import Auth from "./modules/Auth";
import "./styles/App.css";

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                  if (Auth.isUserAuthenticated()) {
                    return <DashboardPage />;
                  } else {
                    return <HomePage />;
                  }
                }}
              />
              <Route path="/spotmap" component={SpotMap} />
              <Route path="/dashboard" component={DashboardPage} />
              <Route path="/signup" component={SignUpPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/test" component={Test} />

              <Route
                path="/logout"
                render={() => {
                  Auth.deauthenticateUser();
                  return <Redirect to={{ pathname: "/login" }} />;
                }}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
