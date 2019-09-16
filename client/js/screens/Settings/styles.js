import {StyleSheet} from 'react-native';
import {colors} from '../../config/styles';
const styles = StyleSheet.create({
  txtWrapper: {
    borderWidth: 0.8,
    width: '60%',
    paddingTop: '2.5%',
    paddingBottom: '2.5%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '4.5%',
  },
  text: {
    marginBottom: '3.5%',
    fontSize: 16,
    marginLeft: '3.5%',
    color: colors.Black,
    flexDirection: 'row',
  },
  logoutTxt: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.DarkBlue,
    textAlign: 'center',
  },
  helpContainer: {
    marginVertical: '5%',
    borderBottomWidth: 1,
    width: '100%',
    borderBottomColor: '#D3D3D3',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  arrowContainer: {
    height: 15,
    width: 15,
    marginRight: '5%',
  },
});

export default styles;
