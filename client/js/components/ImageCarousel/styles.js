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
    height: 420,
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  carousel: {
    justifyContent: 'center',
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    position: 'absolute',
    top: '54%',
    alignItems: 'center',
    width: '100%',
  },
  dotStyle: {
    width: 15,
    height: 15,
    borderRadius: 10,
    marginHorizontal: 8,
    backgroundColor: '#003399',
  },
  inactiveDotStyle: {
    backgroundColor: '#E0D5C4',
  },
});

export default styles;
