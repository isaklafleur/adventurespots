import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class Navbar extends Component {
  render() {
    return (
      <AppBar title="Adventure Spots" iconClassNameRight="muidocs-icon-navigation-expand-more" />
    );
  }
}

export default Navbar;
