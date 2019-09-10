import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    height: 410,
    resizeMode: 'cover',
    width: '98%',
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  imageContainer: {
    width: '100%',
    height: 430,
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingLeft: '.8%',
  },
  carousel: {
    justifyContent: 'center',
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    position: 'absolute',
    bottom: '0%',
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
  itemHeart: {
    height: 50,
    width: '15%',
    position: 'absolute',
    bottom: 10,
    right: 20,
  },
});

export default styles;
