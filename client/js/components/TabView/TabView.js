import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Browse from '../../screens/Browse';
import Faves from '../Faves';
import styles from './styles';
import FavesContainer from '../Faves/FavesContainer';
import FavesBrandsContext from '../../context/FaveBrandsContext';
import FavesStoresContext from '../../context/FaveStoresContext';
import FavesItemsContext from '../../context/FaveItemsContext';

class TabViewProfile extends Component {
  constructor(props) {
    super(props);
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
              <View style={styles.imageWrapper}>
                <Image
                  style={styles.itemHeart}
                  source={
                    this.state.items
                      ? require('../../assets/active.png')
                      : require('../../assets/inactiveheart.png')
                  }
                />

                <Text>Items</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={
              this.state.store ? styles.highlighted : styles.tabTitleContainer
            }>
            <TouchableOpacity onPress={() => this.onChangeStyle('store')}>
              <View style={styles.imageWrapper}>
                <Image
                  style={styles.itemHeart}
                  source={
                    this.state.store
                      ? require('../../assets/active.png')
                      : require('../../assets/inactiveheart.png')
                  }
                />

                <Text>Stores</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={
              this.state.brands ? styles.highlighted : styles.tabTitleContainer
            }>
            <View style={styles.imageWrapper}>
              <Image
                style={styles.itemHeart}
                source={
                  this.state.brands
                    ? require('../../assets/active.png')
                    : require('../../assets/inactiveheart.png')
                }
              />

              <TouchableOpacity onPress={() => this.onChangeStyle('brands')}>
                <Text>Brands</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={
              this.state.myphotos
                ? styles.highlighted
                : styles.tabTitleContainer
            }>
            <View style={styles.imageWrapper}>
              <Image
                style={styles.itemHeart}
                source={
                  this.state.myphotos
                    ? require('../../assets/active.png')
                    : require('../../assets/inactiveheart.png')
                }
              />
              <TouchableOpacity onPress={() => this.onChangeStyle('myphotos')}>
                <Text>My Photos</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* {this.state.items && <Browse />} */}
        {this.state.items && <FavesContainer />}
      </View>
    );
  }
}

export default TabViewProfile;
