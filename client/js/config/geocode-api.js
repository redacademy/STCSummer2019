import Geocoder from 'react-native-geocoding';

Geocoder.init('AIzaSyB8nDguUXruPB-lHMXUxDG2yP_U88oa8jw');

Geocoder.from('Colosseum')
  .then(json => {
    json.results[0].geometry.location;
  })
  .catch(error => console.warn(error));

// location object
Geocoder.from({
  latitude: 41.89,
  longitude: 12.49,
});

// latlng object
Geocoder.from({
  lat: 41.89,
  lng: 12.49,
});

Geocoder.from([41.89, 12.49]);
