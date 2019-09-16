import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../config/styles';
const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginHorizontal: 10,
    color: colors.Black,
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
