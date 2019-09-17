import React from 'react';
import {View, Text} from 'react-native';
import MapView from 'react-native-maps';

const Map = ({lng, lat}) => {
  return (
    <MapView
      style={{flex: 1}}
      region={{
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      }}>
      <MapView.Marker
        coordinate={{
          latitude: lat,
          longitude: lng,
        }}
        image={require('../../assets/icons/location-marker3x.png')}
        centerOffset={{y: -10}}
      />
    </MapView>
  );
};

export default Map;
