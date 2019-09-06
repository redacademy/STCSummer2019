import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  itemImage: {
    height: 230,
    width: '100%',
    position: 'relative',
  },
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
    textDecorationLine: 'underline',
  },
  itemHeart: {
    height: '18%',
    width: '25%',
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
});

export default styles;
