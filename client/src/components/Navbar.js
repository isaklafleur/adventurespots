import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import FlatButton from "material-ui/FlatButton";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import Auth from "../modules/Auth";

class Login extends Component {
  static muiName = "FlatButton";

  render() {
    return (
      <div>
        <Link to="/login">
          <FlatButton {...this.props} label="Login" />
        </Link>
        <Link to="/signup">
          <FlatButton {...this.props} label="Sign Up" />
        </Link>
      </div>
    );
  }
}

const Logged = props =>
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    }
    targetOrigin={{ horizontal: "right", vertical: "top" }}
    anchorOrigin={{ horizontal: "right", vertical: "top" }}
  >
    <Link to="/dashboard">
      <MenuItem primaryText="Dashboard" />
    </Link>
    <Link to="/test">
      <MenuItem primaryText="Test" />
    </Link>
    <Link to="/logout">
      <MenuItem primaryText="Sign out" />
    </Link>
  </IconMenu>;

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
        <AppBar
          title="Adventure Spots"
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={Auth.isUserAuthenticated() ? <Logged /> : <Login />}
        />
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <NavLink exact to="/">
            <MenuItem onClick={this.handleClose}>Home</MenuItem>
          </NavLink>
          <NavLink to="/test">
            <MenuItem onClick={this.handleClose}>Test Component</MenuItem>
          </NavLink>
          <NavLink to="/spotmap">
            <MenuItem onClick={this.handleClose}>Spot Map</MenuItem>
          </NavLink>
          <NavLink to="/signup">
            <MenuItem onClick={this.handleClose}>Sign Up</MenuItem>
          </NavLink>
          <NavLink to="/login">
            <MenuItem onClick={this.handleClose}>Login</MenuItem>
          </NavLink>
        </Drawer>
      </div>
    );
  }
}

export default Navbar;
