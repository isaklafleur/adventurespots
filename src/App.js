import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Components
import Navbar from './components/Navbar';

import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Navbar />
      </MuiThemeProvider>
    );
  }
}

export default App;
