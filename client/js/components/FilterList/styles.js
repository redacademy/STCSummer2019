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
    paddingLeft: '5%',
  },
  allItemsContainer: {
    paddingTop: '5%',
    paddingLeft: '3%',
    paddingRight: '3%',
  },
  sortItemsText: {
    fontWeight: '500',
    fontSize: 14,
    letterSpacing: 0.3,
    paddingLeft: '3%',
    paddingRight: '3%',
  },
  dropdown: {
    height: 15,
    width: '15%',
  },
  itemFilter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loader: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  flexContainer: {
    flex: 1,
  },
});

export default styles;
