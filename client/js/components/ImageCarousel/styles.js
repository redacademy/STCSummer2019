import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    height: '100%',
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
    padding: '1%',
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
  heartContainer: {
    height: 40,
    width: 40,
    position: 'absolute',
    zIndex: 2,
    bottom: "3%",
    right: "5%",
  },
  itemHeart: {
    width: '100%',
    height: "100%",
    zIndex: 2,

  },
});

export default styles;
