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
    fontFamily: 'Lato-regular',
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
    fontFamily: 'Lato-Bold',
  },
  dropdown: {
    height: 15,
    width: '15%',
  },
  itemFilter: {
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'Lato-regular',
  },
  loader: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
});

export default styles;
