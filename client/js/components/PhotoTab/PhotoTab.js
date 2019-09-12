import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import FavesBrandsContext from '../../context/FaveBrandsContext';
import {Query} from 'react-apollo';
import styles from './styles';
import {withNavigation} from 'react-navigation';

class PhotoTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;
    return (
      <View>
        <View style={styles.containerImg}>
          <Image
            style={styles.iconImg}
            resizeMode="contain"
            source={require('../../assets/icons/Photos.png')}
          />
        </View>
        <Text style={styles.text}>Photo Feature Coming Soon!</Text>
        <Text style={styles.subText}>
          Save your photos here so you always keep track of fashion you love !
        </Text>
      </View>
    );
  }
}

export default PhotoTab;
