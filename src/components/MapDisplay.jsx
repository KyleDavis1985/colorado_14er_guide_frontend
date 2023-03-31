import React from 'react'
import GoogleMapReact, { googleMapLoader } from 'google-map-react-rc-18';

const MapDisplay = (props) => {

let lat = props.lat
let long = props.long

let defaultProps = {
    center: {
      lat: parseInt(lat), 
      lng:  parseInt(-long)
    },
    zoom:10,
  }
  return (
    <div style={{ height: '30vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY}}
        center={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      > 
      </GoogleMapReact>
      <button className="map-display-button" onClick={props.handleClick}>Close</button>
    </div>
  )
}

export default MapDisplay