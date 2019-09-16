import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Map from './Map';

class MapContainer extends Component {
  render() {
    const lng = this.props.navigation.getParam('lng');
    const lat = this.props.navigation.getParam('lat');
    return <Map lng={lng} lat={lat} />;
  }
}

export default MapContainer;
