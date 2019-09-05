import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  allItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sortItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
  allItemsContainer: {
    paddingTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
  sortItemsText: {
    fontWeight: '500',
    fontSize: 14,
    letterSpacing: 0.3,
    paddingLeft: 5,
    paddingRight: 5,
  },
  dropdown: {
    height: 15,
    width: 15,
  },
  itemFilter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
