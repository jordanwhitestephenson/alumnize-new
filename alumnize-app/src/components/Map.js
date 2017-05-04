import React, { Component } from 'react'
import { withGoogleMap, GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'
import _ from 'lodash'

const GettingStartedGoogleMap = withGoogleMap(props => (
<GoogleMap
  ref={props.onMapLoad}
  defaultZoom={7}
  defaultCenter={{
    lat:39.7376,
    lng:-104.9847
 }}
  onClick={props.onMapClick}>

  {props.markers.map((marker, index) => (
    <Marker
      {...marker}
      key={index}
      onRightClick={() => props.onMarkerRightClick(index)}
    />
  ))}
</GoogleMap>
));

class Map extends Component {
  constructor(){
  super()
  this.handleMapLoad = this.handleMapLoad.bind(this);
}

  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  }
// Then, render it:
render(){
  return(
  <GettingStartedGoogleMap
    containerElement={
      <div style={{ height: `100%` }} />
    }
    mapElement={
      <div style={{ height: `100%` }} />
    }
    onMapLoad={this.handleMapLoad}
    onMapClick={_.noop}
    markers={this.props.markers}
    onMarkerRightClick={_.noop}
  />

)
}
}

export default Map
