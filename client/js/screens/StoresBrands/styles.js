import {StyleSheet} from 'react-native';
import {fonts, colors} from '../../config/styles';
const styles = StyleSheet.create({
  topNavContainer: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 20,
  },
  topNavTitleContainer: {
    borderBottomColor: '#2B2D2F',
    borderBottomWidth: 3,
    width: '30%',
    marginLeft: '3%',
    marginRight: '3%',
    alignItems: 'center',
  },
  //Brand section
  brandContainer: {
    borderBottomColor: '#2B2D2F',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '10%',
    marginRight: '10%',
    paddingTop: '8%',
    paddingBottom: '4%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  arrowContainer: {
    height: 15,
    width: 15,
  },
  //Map Link styles
  mapLinkContainer: {
    width: '100%',
    justifyContent: 'flex-start',
    marginTop: '3%',
  },
  mapText: {
    fontSize: 12,
    textDecorationLine: 'underline',
  },
});

export default styles;
