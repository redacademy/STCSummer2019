import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  itemImageContainer: {
    height: 380,
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: '1%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  image: {
    height: '100%',
    resizeMode: 'cover',
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 370,
    height: 370,
    marginTop: 16,
    justifyContent: 'center',
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  carousel: {
    justifyContent: 'center',
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    position: 'absolute',
    bottom: '5%',
    alignItems: 'center',
    width: '100%',
  },
  dotStyle: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: '#003399',
  },
  inactiveDotStyle: {
    backgroundColor: '#E0D5C4',
  },
  heartContainer: {
    height: 40,
    width: 40,
    position: 'absolute',
    zIndex: 2,
    bottom: '5%',
    right: '5%',
  },
  itemHeart: {
    width: '100%',
    height: '100%',
    zIndex: 2,
  },
});

export default styles;
