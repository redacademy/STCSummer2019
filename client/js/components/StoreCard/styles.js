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
    height: 100,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 15,
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    position: 'relative',
  },
  imageContainer: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  storeContentContainer: {
    justifyContent: 'space-around',
    width: '70%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  partnerImageContainer: {
    height: 30,
    width: 30,
    position: 'absolute',
    zIndex: 2,
    right: '5%',
    top: -15,
  },
  partnerImage: {
    width: '100%',
    height: '100%',
  },
  partnerStoreCardContainer: {
    width: '90%',
    height: 100,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 15,
    marginBottom: 10,
    flexDirection: 'row',
    shadowOffset: {width: 4, height: 2},
    shadowColor: '#D3D3D3',
    shadowOpacity: 0.8,
    backgroundColor: 'white',
    position: 'relative',
  },
});

export default styles;
