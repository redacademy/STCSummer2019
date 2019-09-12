import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import ItemTab from '../ItemTab';
import StoreTab from '../StoreTab';
import BrandTab from '../BrandTab';

const ItemRoute = () => <ItemTab />;

const StoreRoute = () => <StoreTab />;

const BrandRoute = () => <BrandTab />;

export default class TabProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        {key: 'items', title: 'Items'},
        {key: 'stores', title: 'Stores'},
        {key: 'brands', title: 'Brands'},
      ],
    };
  }

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          items: ItemRoute,
          stores: StoreRoute,
          brands: BrandRoute,
        })}
        onIndexChange={index => this.setState({index})}
        initialLayout={{width: Dimensions.get('window').width}}
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
