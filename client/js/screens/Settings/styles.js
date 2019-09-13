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
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    borderBottomColor: '#D3D3D3',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  arrowContainer: {
    height: 15,
    width: 15,
    marginTop: '8%',
    marginRight: '5%',
  },
});

export default styles;
