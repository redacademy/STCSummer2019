import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  brandLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  linkText: {
    fontSize: 14,
    textDecorationLine: 'underline',
    fontFamily: 'Lato-Bold',
    color: '#333638',
  },
  linkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  contentContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '1.5%',
    width: 350,
  },
  contentHeader: {
    fontFamily: 'Lato-Regular',
    fontSize: 20,
  },
  content: {
    marginTop: '2.5%',
    fontFamily: 'Lato-Light',
    color: '#333638',
    fontSize: 16,
    lineHeight: 21,
  },
  contactInfoContainer: {
    marginBottom: '5%',
  },
  carryHeader: {
    marginTop: '5%',
    color: '#333638',
    fontFamily: 'Lato-Bold',
    fontSize: 16,
  },
});
export default styles;
