import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Test from './components/Test';
import NotFound from './components/NoteFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/test" component={Test} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
