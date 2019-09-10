import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Browse from '../../screens/Browse';
import Faves from '../Faves';
import styles from './styles';

class TabViewProfile extends Component {
  constructor() {
    super();
    this.state = {
      items: true,
      store: false,
      brands: false,
      myphotos: false,
    };
  }

  onChangeStyle(tab) {
    this.setState({
      items: false,
      store: false,
      brands: false,
      myphotos: false,
    });
    this.setState({[tab]: true});
  }
  render() {
    return (
      <View>
        <View style={styles.tabBarContainer}>
          <View
            style={
              this.state.items ? styles.highlighted : styles.tabTitleContainer
            }>
            <TouchableOpacity onPress={() => this.onChangeStyle('items')}>
              <Text>Items</Text>
            </TouchableOpacity>
          </View>
          <View
            style={
              this.state.store ? styles.highlighted : styles.tabTitleContainer
            }>
            <TouchableOpacity onPress={() => this.onChangeStyle('store')}>
              <Text>Stores</Text>
            </TouchableOpacity>
          </View>
          <View
            style={
              this.state.brands ? styles.highlighted : styles.tabTitleContainer
            }>
            <TouchableOpacity onPress={() => this.onChangeStyle('brands')}>
              <Text>Brands</Text>
            </TouchableOpacity>
          </View>
          <View
            style={
              this.state.myphotos
                ? styles.highlighted
                : styles.tabTitleContainer
            }>
            <TouchableOpacity onPress={() => this.onChangeStyle('myphotos')}>
              <Text>My Photos</Text>
            </TouchableOpacity>
          </View>
        </View>
        {this.state.store && <Browse />}
        {/* {this.state.items === true ? <Faves item={stores} /> : null} */}
      </View>
    );
  }
}

export default TabViewProfile;
