import {StyleSheet} from 'react-native';
import {fonts, colors} from '../../config/styles';
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginHorizontal: 10,
    fontFamily: fonts.baseFont,
    color: colors.Black,
  },
  browseImage: {
    height: 180,
    width: '94%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '5%',
    margin: '5%',
  },
});

export default styles;
