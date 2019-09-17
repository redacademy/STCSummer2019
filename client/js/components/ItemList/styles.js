import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  fullItem: {
    width: '50%',
    paddingLeft: '2%',
    paddingRight: '2%',
    position: 'relative',
  },
  itemText: {
    fontWeight: '500',
    fontSize: 14,
    letterSpacing: 0.3,
    paddingBottom: '10%',
    paddingTop: '3%',
<<<<<<< HEAD
    fontFamily: 'Lato-Bold',
    textDecorationLine: 'underline',
    color: '#333638',
=======
>>>>>>> develop
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
  },
  itemDiscountContainer: {
    backgroundColor: '#003399',
    position: 'absolute',
    zIndex: 3,
    left: '7%',
    top: '2%',
  },
  itemDiscount: {
    color: 'white',
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    padding: '1%',
  },
});

export default styles;
