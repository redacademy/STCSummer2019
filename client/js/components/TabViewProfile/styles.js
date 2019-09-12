import {StyleSheet, StatusBar} from 'react-native';
import {colors} from '../../config/styles';

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-around',
  },
  tabTitleContainer: {
    fontSize: 10,
    borderBottomWidth: 3,
    borderColor: 'grey',
    width: '33.3%',
  },
  highlighted: {
    fontSize: 10,
    borderBottomWidth: 3,
    borderColor: colors.DarkBlue,
    width: '33.3%',
  },
  itemHeart: {
    height: 15,
    width: '13%',
    marginRight: '2.5%',
    marginBottom: '3.5%',
  },
  imageWrapper: {
    flexDirection: 'row',
  },
  text: {
    marginLeft: '3.5%',
  },
});

export default styles;
