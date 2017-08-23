import React, { Component } from "react";
import { Card, CardTitle } from "material-ui/Card";

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card className="container">
        <CardTitle
          title="React Application"
          subtitle="This is the home page."
        />
      </Card>
    );
  }
}

export default HomePage;
