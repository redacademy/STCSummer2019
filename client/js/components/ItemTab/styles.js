import {StyleSheet} from 'react-native';
import {colors} from '../../config/styles';

const styles = StyleSheet.create({
  itemImage: {
    height: '100%',
    width: '100%',
  },

  container: {
    marginTop: '5%',
  },

  storeImage: {
    width: '90%',
    height: '90%',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
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
  iconImg: {
    width: '100%',
    height: '100%',
  },
  containerImg: {
    marginTop: '10%',
    marginLeft: '35%',
    width: '30%',
    height: '30%',
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
  favItemWrapper: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  subfavItemWrapper: {
    width: '50%',
    height: 235,
    padding: 4,
  },
  imgWrapper: {
    width: '100%',
  },
});
export default styles;
