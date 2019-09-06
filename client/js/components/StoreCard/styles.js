import {StyleSheet} from 'react-native';
import AuthLoading from '../../screens/AuthLoading';

const styles = StyleSheet.create({
  image: {
    width: '90%',
    height: '90%',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
  },
  storeCardContainer: {
    width: '90%',
    height: '40%',
    borderWidth: 1,
    borderColor: '#D3D3D3',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    shadowOffset: {width: 2, height: 3},
    shadowColor: '#D3D3D3',
    shadowOpacity: 1.0,
    backgroundColor: 'white',
  },
  imageContainer: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  storeContentContainer: {
    justifyContent: 'space-around',
    paddingLeft: '5%',
  },
});

export default styles;
