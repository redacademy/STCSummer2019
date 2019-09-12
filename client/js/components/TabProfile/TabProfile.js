import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ItemTab from '../ItemTab';
import StoreTab from '../StoreTab';
import BrandTab from '../BrandTab';
import styles from './styles';

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
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{backgroundColor: '#003399'}}
            style={{backgroundColor: 'white'}}
            activeColor={'black'}
            inactiveColor={'black'}
          />
        )}
      />
    );
  }
}
