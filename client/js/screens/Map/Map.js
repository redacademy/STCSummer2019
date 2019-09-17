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
        latitudeDelta: 0.08,
        longitudeDelta: 0.04,
      }}>
      <MapView.Marker
        coordinate={{
          latitude: lat,
          longitude: lng,
        }}
        image={require('../../assets/icons/location-marker3x.png')}
      />
    </MapView>
  );
};

export default Map;
