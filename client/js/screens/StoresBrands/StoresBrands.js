import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import StoreCard from '../../components/StoreCard'
class StoresBrands extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayStore: true
    }
  }
  render() {
    return (
      <View>
        <View>
          <TouchableOpacity
            onPress={() => this.setState({ displayStore: !this.state.displayStore })}
          >
            <Text>Stores</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({ displayStore: !this.state.displayStore })}
          >
            <Text>Brands</Text>
          </TouchableOpacity>
        </View>
        {this.state.displayStore ?
          <FlatList
            data={this.props.stores}
            renderItem={({ item }) => <StoreCard store={item} navigation={this.props.navigation} />}
          /> :
          <FlatList
            data={this.props.brands}
            renderItem={({ item }) => (<TouchableOpacity
              onPress={() => this.props.navigation.navigate('brand', { brand: item })}
            ><Text>{item.title}</Text><Text>    >></Text></TouchableOpacity>)}
          />
        }
      </View>
    );
  }
};

export default StoresBrands;
