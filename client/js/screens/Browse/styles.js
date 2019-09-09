import {StyleSheet, Dimensions} from 'react-native';
import {fonts, colors} from '../../config/styles';
const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginHorizontal: 10,
    fontFamily: fonts.baseFont,
    color: colors.Black,
  },
  browseImage: {
    height: height / 4,
    width: '94%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '2.8%',
    marginTop: 10,
  },
});

export default styles;
