import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import injectTapEventPlugin from "react-tap-event-plugin";

// Components
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Test from "./components/Test";
import SpotMap from "./components/SpotMap";
import NotFound from "./components/NoteFound";
import SignUpPage from "./components/containers/SignUpPage";
import LoginPage from "./components/containers/LoginPage";
import "./styles/App.css";

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/test" component={Test} />
              <Route path="/spotmap" component={SpotMap} />
              <Route path="/signup" component={SignUpPage} />
              <Route path="/login" component={LoginPage} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
