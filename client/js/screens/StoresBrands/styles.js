import {StyleSheet} from 'react-native';
import {fonts, colors} from '../../config/styles';
const styles = StyleSheet.create({
  topNavContainer: {
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25,
    marginBottom: 20,
  },
  topNavTitleContainer: {
    borderBottomColor: '#2B2D2F',
    borderBottomWidth: 3,
    width: '40%',
    alignItems: 'center',
  },
});

export default styles;
