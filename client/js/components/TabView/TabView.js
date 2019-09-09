import React, {Component} from 'react';
import {View, Dimensions, Text, Image, Icon} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import styles from './styles';
import {fonts, colors} from '../../config/styles';

const ItemsRoute = () => <View />;
const StoresRoute = () => <View />;
const BrandsRoute = () => <View />;
const MyPhotosRoute = () => <View />;
// const heart = (
//   <Image
//     style={styles.itemHeart}
//     source={require('../../assets/inactiveheart.png')}
//   />
// );
// const hearts = (
//   <Image
//     style={styles.itemHeart}
//     source={require('../../assets/inactiveheart.png')}
//   />
//);

class TabViewProfile extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    index: 0,
    routes: [
      {key: 'items', title: 'Items'},
      {key: 'store', title: 'Stores'},
      {key: 'brands', title: 'Brands'},
      {key: 'myphotos', title: 'My Photos'},
    ],
  };

  renderTabBar(props) {
    return (
      <TabBar
        style={styles.tabBar}
        labelStyle={{color: 'black', fontSize: 9.5}}
        {...props}
        indicatorStyle={{backgroundColor: colors.Black, height: '7%'}}
      />
    );
  }

  render() {
    return (
      <TabView
        renderTabBar={this.renderTabBar}
        navigationState={this.state}
        renderScene={SceneMap({
          items: ItemsRoute,
          store: StoresRoute,
          brands: BrandsRoute,
          myphotos: MyPhotosRoute,
        })}
        onIndexChange={index => this.setState({index})}
        // onIndexChange={index => this.setState({index})}
        initialLayout={{width: Dimensions.get('window').width}}
        style={styles.container}
      />
    );
  }
}

export default TabViewProfile;
