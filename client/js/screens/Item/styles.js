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
    fontFamily: 'Lato-regular',
  },
  itemTags: {
    fontSize: 12,
    fontWeight: '200',
    fontFamily: 'Lato-regular',
  },
  itemTitle: {
    fontWeight: '500',
    paddingBottom: '2%',
    fontFamily: 'Lato-Bold',
  },
  dropdown: {
    borderColor: 'black',
    borderWidth: 0.4,
    width: '75%',
    flex: 2,
    justifyContent: 'center',
    height: 35,
  },
  sizedropdown: {
    borderColor: 'black',
    borderWidth: 0.4,
    width: '75%',
    flex: 2,
    height: 35,
    justifyContent: 'center',
    marginBottom: '3%',
  },
  singleItem: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingLeft: '5%',
    paddingRight: '5%',
    marginTop: '5%',
    paddingBottom: '5%',
  },
  allDropdown: {
    width: '70%',
    paddingLeft: '8%',
    paddingRight: '6%',
  },
  itemInfo: {
    width: '53%',
  },
});

export default styles;
