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
    // padding: '5%',
  },

  backIcon: {
    resizeMode: 'contain',
    height: '35%',
    width: '35%',
    marginLeft: '10%',
  },

  cogwheelIcon: {
    resizeMode: 'contain',
    height: '58%',
    width: '58%',
    marginLeft: '10%',
  },
  backContainer: {
    height: 50,
    width: 50,
    justifyContent: 'center',
  },
});

export default styles;
