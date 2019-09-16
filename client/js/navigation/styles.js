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
  },

  backIcon: {
    resizeMode: 'contain',
    height: '35%',
    width: '35%',
    marginLeft: '10%',
  },

  cogwheelIcon: {
    resizeMode: 'contain',
    height: '25%',
    width: '25%',
    marginLeft: '55%',
  },
  backContainer: {
    height: 50,
    width: 50,
    justifyContent: 'center',
  },
});

export default styles;
