// import React, {Component} from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
// import Browse from '../../screens/Browse';
// class TabViewProfile extends Component {
//   constructor() {
//     super();
//     this.state = {
//       store: true,
//       brands: false,
//       myphotos: false,
//       shop: false,
//     };
//   }
//   render() {
//     return (
//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           width: '90%',
//           marginLeft: '3.5%',
//           borderColor: 'grey',
//           borderBottomWidth: 3,
//         }}>
//         <View>
//           <TouchableOpacity
//             onPress={() => this.setState({...this.state, item: true})}>
//             <Text>Items</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => this.setState({...this.state, store: true})}>
//             <Text>Stores</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => this.setState({...this.state, store: true})}>
//             <Text>Brands</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => this.setState({...this.state, store: true})}>
//             <Text>My Photos</Text>
//           </TouchableOpacity>
//         </View>
//         {this.state.store && <Browse />}
//         {this.state.brands&& <Browse />}

//       </View>
//     );
//   }
// }

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#2c3e50',
//   },
//   text: {
//     fontSize: 10,
//     borderColor: 'blue',
//     borderBottomWidth: 3,
//   },
// });

// //make this component available to the app
// export default TabViewProfile;

import React, {Component} from 'react';
import {View, Dimensions, Text, Image} from 'react-native';
import {TabView, TabBar, SceneMap, Icon} from 'react-native-tab-view';
import styles from './styles';
import {fonts, colors} from '../../config/styles';
import Browse from '../../screens/Browse';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ItemsRoute = () => <Browse />;
const StoresRoute = () => <View />;
const BrandsRoute = () => <View />;
const MyPhotosRoute = () => <View />;

class TabViewProfile extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    index: 0,
    routes: [
      {key: 'items', icon: 'ios-heart', title: 'Items'},
      {key: 'store', icon: 'ios-heart', title: 'Stores'},
      {key: 'brands', icon: 'ios-heart', title: 'Brands'},
      {key: 'myphotos', icon: 'ios-heart', title: 'My Photos'},
    ],
  };

  renderTabBar(props) {
    return (
      <TabBar
        style={styles.tabBar}
        labelStyle={{color: 'black', fontSize: 9.5, marginBottom: '3.5%'}}
        {...props}
        indicatorStyle={{backgroundColor: colors.Black, height: '7%'}}
        renderIcon={() => (
          <Image
            style={styles.itemHeart}
            source={require('../../assets/active.png')}
          />
        )}
      />
    );
  }

  // renderIcon={({route, focused, color}) => (
  //   <Icon
  //     name="ios-heart"
  //     color={focused ? colors.DarkBlue : 'white'}
  //     size={10}
  //   />
  // )}
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
        // onIndexChange={index => this.setState({index, icon: {hearts} })}
        initialLayout={{width: Dimensions.get('window').width}}
        style={styles.container}
      />
    );
  }
}

export default TabViewProfile;
