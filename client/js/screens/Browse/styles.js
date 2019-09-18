import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../config/styles';
const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginHorizontal: 10,
    fontFamily: 'Lato',
    fontColor: '#333638',
  },
  browseImage: {
    height: height / 5,
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
    marginVertical: '3.2%',
    backgroundColor: 'green',
  },
});

export default styles;
