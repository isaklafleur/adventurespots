import React from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Auth from "../modules/Auth";

const Base = ({ children }) =>
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <NavLink to="/">React App</NavLink>
      </div>

      {Auth.isUserAuthenticated()
        ? <div className="top-bar-right">
            <Link to="/logout">Log out</Link>
          </div>
        : <div className="top-bar-right">
            <Link to="/login">Log in</Link>
            <Link to="/signup">Sign up</Link>
          </div>}
    </div>

    {/* child component will be rendered here */}
    {children}
  </div>;

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
