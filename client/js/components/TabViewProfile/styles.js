import {StyleSheet, StatusBar} from 'react-native';
import {colors} from '../../config/styles';

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
  itemHeart: {
    height: 15,
    width: '18%',
    marginRight: '2.5%',
  },
  imageWrapper: {
    flexDirection: 'row',
  },

  containerImg: {
    marginTop: '10%',
    marginLeft: '35%',
    width: '30%',
    height: '30%',
  },
  iconImg: {
    width: '100%',
    height: '100%',
  },
  subText: {
    marginTop: '5%',
    fontSize: 15,
    fontWeight: '100',
    textAlign: 'center',
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  text: {
    marginTop: '10%',
    fontSize: 18,
    textAlign: 'center',
  },
  browseTxt: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.DarkBlue,
    textAlign: 'center',
  },
  txtWrapper: {
    borderWidth: 0.8,
    width: '60%',
    paddingTop: '2.5%',
    paddingBottom: '2.5%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '4.5%',
  },
});

export default styles;
