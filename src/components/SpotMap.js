import React, { Component } from 'react';
import { GoogleMap, withGoogleMap, Marker } from 'react-google-maps';
import '../styles/SpotMap.css';

class SpotMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [
        {
          position: {
            lat: 41.4,
            lng: 1.99,
          },
          key: `Taiwan`,
          defaultAnimation: 2,
        },
      ],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleZoom = this.handleZoom.bind(this);
  }
  handleClick(e) {
    console.log('click ' + JSON.stringify(e, null, 2));
  }
  handleZoom(e) {
    console.log('double click ' + JSON.stringify(e, null, 2));
  }

  render() {
    const GettingStartedGoogleMap = withGoogleMap(props =>
      <GoogleMap
        defaultZoom={6}
        defaultCenter={{ lat: 41.4, lng: 2.17 }}
        onClick={this.handleClick}
        onDblClick={this.handleZoom}
      >
        {this.state.markers.map(marker => <Marker {...marker} />)};
      </GoogleMap>,
    );
    return (
      <div>
        <GettingStartedGoogleMap
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `500px` }} />}
        />
      </div>
    );
  }
}

export default SpotMap;
