import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  brandLinkContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  linkText: {
    fontSize: 14,
    textDecorationLine: 'underline',
    fontFamily: 'Lato-bold',
  },
  linkContainer: {
    alignItems: 'center',
  },

  contentContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '1%',
    width: 350,
  },
  contentHeader: {
    marginTop: '5%',
    fontFamily: 'Lato-Bold',
    fontSize: 14,
  },
  content: {
    marginTop: '2.5%',
    fontFamily: 'Lato-Light',
    fontSize: 14,
    lineHeight: 21,
  },
  contactInfoContainer: {
    marginBottom: '5%',
  },
  carryHeader: {
    marginTop: '5%',
  },
});
export default styles;
