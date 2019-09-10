import {StyleSheet, StatusBar} from 'react-native';
import {fonts, colors} from '../../config/styles';

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  tabTitleContainer: {
    fontSize: 10,
    borderBottomWidth: 3,
    borderColor: 'grey',
    width: '25%',
  },
  highlighted: {
    fontSize: 10,
    borderBottomWidth: 3,
    borderColor: colors.DarkBlue,
    width: '25%',
  },
});

export default styles;
