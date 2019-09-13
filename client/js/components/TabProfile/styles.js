import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../config/styles';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  tabView: {
    backgroundColor: 'white',
  },
  container: {
    padding: 4,
    width: '100%',
    height: '100%',
  },
});
export default styles;
