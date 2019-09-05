import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  allItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    //justifyContent: 'center',
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
    fontWeight: '700',
  },
});

export default styles;
