import React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles'
import ItemList from '../ItemList'
import Modal from "react-native-modal";
import { SafeAreaView } from 'react-navigation';

class FilterList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filteredStores: [],
      filteredStyles: [],
      toggleStores: false,
      toggleStyles: false,
      displayFilter: false,
    }
  }



  filterHelper = (data, stores, itemStyles) => {
    let newData;
    if (stores.length > 0 && itemStyles.length > 0) {
      newData = data.filter(
        (item) => item.stores.find((store) => stores.includes(store.title))
      ).filter(
        (item) => itemStyles.find((style) => item.styles === style)
      )
    } else if (stores.length > 0) {
      newData = data.filter(
        (item) => item.stores.find((store) => stores.includes(store.title))
      )
    } else if (itemStyles.length > 0) {
      newData = data.filter(
        (item) => itemStyles.find((style) => item.styles === style)
      )
    }
    return newData
  }

  toggleStores = () => { this.setState({ toggleStores: !this.state.toggleStores }) }
  toggleStyles = () => { this.setState({ toggleStyles: !this.state.toggleStyles }) }

  addfilterStore = (storeName) => {
    !this.state.filteredStores.includes(storeName) ?
      this.setState({ filteredStores: [...this.state.filteredStores, storeName] }) : this.setState({
        filteredStores:
          this.state.filteredStores.filter((store) => store !== storeName)
      });
    console.log(this.state.filteredStores)

  }

  addfilterStyle = (styleName) => {
    !this.state.filteredStyles.includes(styleName) ?
      this.setState({ filteredStyles: [...this.state.filteredStyles, styleName] }) : this.setState({ filteredStyles: this.state.filteredStyles.filter((style) => style !== styleName) })
  }

  render() {
    const { stores, itemStyles, items, navigation } = this.props
    let newItems = (this.state.filteredStores.length > 0 || this.state.filteredStyles.length > 0) ? this.filterHelper(items, this.state.filteredStores, this.state.filteredStyles) : items
    return (
      <View style={{}}>
        <Modal
          animationIn={'slideInRight'}
          animationOut={'slideOutRight'}
          // animationInTiming={500}
          isVisible={this.state.displayFilter}
          style={{ width: '80%', height: '100%', backgroundColor: "white", margin: 0, marginLeft: 100 }}
          // coverScreen={false}
          backdropOpacity={0.4}
          onBackdropPress={() => this.setState({ displayFilter: false })}
        >

          {/* <View> */}
          <View>
            <TouchableOpacity
              onPress={() => this.setState({
                filteredStores: [],
                filteredStyles: []
              })}
            >
              <Text>Clear All</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.toggleStores()}
            >
              <Text style={{ fontSize: 20 }}>Stores</Text>
            </TouchableOpacity>
            {this.state.toggleStores &&
              stores.map((store) => (
                <TouchableOpacity
                  onPress={() => this.addfilterStore(store)}
                  key={store.id}
                >
                  <Text>{store}</Text>
                  {this.state.filteredStores.includes(store) && <Text>x</Text>}
                </TouchableOpacity>
              ))
            }
            <TouchableOpacity
              onPress={() => this.toggleStyles()}
            >
              <Text style={{ fontSize: 20 }}>Styles</Text>
            </TouchableOpacity>
            {this.state.toggleStyles &&
              itemStyles.map((itemStyle) => (
                <TouchableOpacity
                  onPress={() => this.addfilterStyle(itemStyle)}
                  key={itemStyle}
                >
                  <Text>{itemStyle}</Text>
                  {this.state.filteredStyles.includes(itemStyle) ? <Text>x</Text> : null}
                </TouchableOpacity>
              ))
            }
            <TouchableOpacity
              onPress={() => this.setState({ displayFilter: false })}
            >
              <Text>Apply</Text>
            </TouchableOpacity>
          </View>

          {/* </View> */}
        </Modal>


        <ScrollView style={styles.allItemsContainer}>

          <View style={styles.sortItems}>
            <View style={styles.itemFilter}>
              <Text style={styles.sortItemsText}>Sort</Text>
              <Image
                style={styles.dropdown}
                source={require('../../assets/dropdown.png')}
              />
            </View>
            <View style={styles.itemFilter}>
              <Text style={styles.sortItemsText}>Tags</Text>
              <Image
                style={styles.dropdown}
                source={require('../../assets/dropdown.png')}
              />
            </View>
            <TouchableOpacity style={styles.itemFilter}
              onPress={() => this.setState({
                displayFilter: !this.state.displayFilter
              })}
            >
              <Text style={styles.sortItemsText}>Filter</Text>
              <Image
                style={styles.dropdown}
                source={require('../../assets/inactivefilter.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.allItems}>
            {
              newItems && newItems.length > 0 ?
                newItems.map((item) => {
                  return (
                    <ItemList item={item} navigation={navigation} key={item.id} />)
                }) :
                <View><Text>Sorry No Items At This Time, Please Try Again</Text></View>
            }
          </View>
        </ScrollView>
      </View >
    )
  }
}

export default FilterList;
