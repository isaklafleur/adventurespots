import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });
  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <AppBar title="Adventure Spots" onLeftIconButtonTouchTap={this.handleToggle} />
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <NavLink exact to="/">
            <MenuItem onClick={this.handleClose}>Home</MenuItem>
          </NavLink>
          <NavLink to="/test">
            <MenuItem onClick={this.handleClose}>Test</MenuItem>
          </NavLink>
        </Drawer>
      </div>
    );
  }
}

export default Navbar;
