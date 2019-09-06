import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '70%',
    height: '70%',
    resizeMode: 'contain',
  },
  imageContainer: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5%',
  },

  backIcon: {
    resizeMode: 'contain',
    height: '15%',
    width: '15%',
    marginLeft: '5%',
  },
  backContainer: {
    height: 100,
    width: 100,
    justifyContent: 'center',
  },
});

export default styles;
