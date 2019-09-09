import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    height: 410,
    resizeMode: 'cover',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 430,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  carousel: {
    justifyContent: 'center',
    position: 'relative',
  },
  dotPosition: {
    position: 'absolute',
  },
});

export default styles;
