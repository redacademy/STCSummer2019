import {Dimensions, StyleSheet} from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginHorizontal: 10,
    color: '#333638',
    fontFamily: 'Lato-regular',
  },
  browseImage: {
    height: height / 5,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
  },
});

export default styles;
