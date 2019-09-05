import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  itemImage: {
    height: 230,
    width: '100%',
    position: 'relative',
  },
  fullItem: {
    width: '50%',
    paddingLeft: 6,
    paddingRight: 6,
  },
  itemText: {
    fontWeight: '500',
    fontSize: 14,
    letterSpacing: 0.3,
  },
  itemHeart: {
    height: 35,
    width: 35,
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
});

export default styles;
