import {StyleSheet, StatusBar} from 'react-native';
import {fonts, colors} from '../../config/styles';
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
  itemHeart: {
    height: '15%',
    width: '10%',
  },
  tabBar: {
    backgroundColor: '#FFFFFF',
    elevation: 0,
    borderColor: colors.LightGrey,
    borderBottomWidth: 2,
    height: '7%',
    marginHorizontal: '3.5%',
  },
});

export default styles;
