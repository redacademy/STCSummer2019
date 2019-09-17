import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  fullItem: {
    width: '50%',
    paddingLeft: '2%',
    paddingRight: '2%',
  },
  itemText: {
    fontWeight: '500',
    fontSize: 14,
    letterSpacing: 0.3,
    paddingBottom: '3%',
    paddingTop: '3%',
    fontFamily: 'Lato-Bold',
    textDecorationLine: 'underline',
    color: '#333638',
  },
  imageHeartContainer: {
    position: 'relative',
  },
  itemHeart: {
    width: '100%',
    height: '100%',
    zIndex: 2,
  },
  heartContainer: {
    height: 40,
    width: 40,
    position: 'absolute',
    zIndex: 2,
    bottom: '3%',
    right: '5%',
  },
  itemImageContainer: {
    height: 230,
    width: '100%',
  },
  itemImage: {
    height: '100%',
    width: '100%',
    // position: 'relative',
  },
});

export default styles;
