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

    return <Text>Coming Soon</Text>;
  }
}

export default PhotoTab;
