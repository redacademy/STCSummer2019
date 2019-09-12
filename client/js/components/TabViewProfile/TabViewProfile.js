import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import FavesContainer from '../faves/FavesContainer';

class TabViewProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: true,
      stores: false,
      brands: false,
      myphotos: false,
    };
    console.log(this.statemyphotos, 'photos');
  }

  onChangeStyle(tab) {
    this.setState({
      items: false,
      stores: false,
      brands: false,
      myphotos: false,
    });
    this.setState({[tab]: true});
  }
  render() {
    const {items, brands, stores} = this.props;
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
              this.state.stores ? styles.highlighted : styles.tabTitleContainer
            }>
            <TouchableOpacity onPress={() => this.onChangeStyle('stores')}>
              <View style={styles.imageWrapper}>
                <Image
                  style={styles.itemHeart}
                  source={
                    this.state.stores
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

        <FavesContainer
          items={items}
          stores={stores}
          brands={brands}
          displayscreen={this.state}
        />
      </View>
    );
  }
}

export default TabViewProfile;
