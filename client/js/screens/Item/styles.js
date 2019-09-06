import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  carouselContainer: {
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '3%',
  },
  itemBrand: {
    textTransform: 'uppercase',
    fontWeight: '800',
    paddingBottom: '2%',
    paddingTop: '3%',
  },
  itemTags: {
    fontSize: 12,
    fontWeight: '200',
  },
  itemTitle: {
    fontWeight: '500',
    paddingBottom: '2%',
  },
  dropdown: {
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
    flex: 2,
    height: 60,
  },
  sizedropdown: {
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
    flex: 2,
    height: 60,
    marginBottom: '4%',
  },
  singleItem: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  allDropdown: {
    width: '50%',
    alignContent: 'flex-start',
  },
});

export default styles;
