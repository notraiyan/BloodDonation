import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
  width: '100%',
  height: '100%',
}
function Mapshow() {
  return(
    <Map google={window.google} style={style} initialCenter={{
      lat: 23.747117,
      lng: 90.410127
    }}
    zoom={15}/>
  );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBFcitYu9oeMNWV7XAudm70NTAYhtbSrQE'
  })(Mapshow);