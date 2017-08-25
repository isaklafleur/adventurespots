import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, CardTitle, CardText } from "material-ui/Card";

const Dashboard = ({ secretData }) =>
  <Card className="container">
    <CardTitle
      title="Dashboard"
      subtitle="You should get access to this page only after authentication."
    />

    {secretData &&
      <CardText style={{ fontSize: "16px", color: "green" }}>
        {secretData}
        <br />
        <Link to="/logout">Log out</Link>
      </CardText>}
  </Card>;

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
