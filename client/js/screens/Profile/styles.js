import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  userName: {
    fontSize: 16,
    margin: 10,
  },
  editProfile: {
    margin: 10,
    fontSize: 16,
    textDecorationLine: 'underline',
  },

  itemHeart: {
    width: '20%',
  },
  container: {
    flex: 1,
    marginLeft: '4%',
    marginRight: '4%',
    paddingTop: '6%',
  },
  imgWrapper: {
    flexDirection: 'row',
    marginHorizontal: '3.5%',
  },
  btnWrapper: {
    marginTop: 20,
  },
  roundedProfileImage: {
    width: 100,
    height: 100,
    borderWidth: 3,
    borderColor: 'grey',
    borderRadius: 50,
  },
});

export default styles;
