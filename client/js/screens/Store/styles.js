import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  //map link
  mapLinkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapText: {
    textDecorationLine: 'underline',
    fontFamily: 'Lato-Bold',
    color: '#333638',
    fontSize: 14,
  },
  dayHoursContainer: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
    marginTop: '2.5%',
  },
  contentContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '1.5%',
    width: 350,
  },
  storeMapContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  contentHeaders: {
    marginTop: '5%',
    fontFamily: 'Lato-Bold',
    fontSize: 16,
  },
  content: {
    marginTop: '2.5%',
    fontFamily: 'Lato-Light',
    color: '#333638',
    fontSize: 16,
    lineHeight: 21,
  },
  storeCategories: {
    marginTop: '2.5%',
    fontFamily: 'Lato-Light',
    fontSize: 14,
  },
  storeTitle: {
    fontFamily: 'Lato-Regular',
    fontSize: 20,
  },
  contactInfoContainer: {
    marginBottom: '5%',
  },
});

export default styles;
