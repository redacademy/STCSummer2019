import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  //map link
  mapLinkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapText: {
    fontSize: 14,
    textDecorationLine: 'underline',
    fontFamily: 'Lato-bold',
  },
  dayHoursContainer: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
    marginTop: '2.5%',
  },
  contentContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '1%',
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
    fontSize: 14,
  },
  content: {
    marginTop: '2.5%',
    fontFamily: 'Lato-Light',
    fontSize: 14,
  },
  storeCategories: {
    marginTop: '2.5%',
    fontFamily: 'Lato-Light',
    fontSize: 14,
  },
  storeTitle: {
    fontFamily: 'Lato',
    fontSize: 16,
    color: '#2B2D2F',
  },
  contactInfoContainer: {
    marginBottom: '5%',
  },
});

export default styles;
