import React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import ItemList from '../ItemList';
import FilterModal from '../FilterModal/FilterModal';

class FilterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredStores: [],
      filteredStyles: [],
      toggleStores: false,
      toggleStyles: false,
      displayFilter: false,
    };
  }

  filterHelper = (data, stores, itemStyles) => {
    let newData;
    if (stores.length > 0 && itemStyles.length > 0) {
      newData = data
        .filter(item => item.stores.find(store => stores.includes(store.title)))
        .filter(item => itemStyles.find(style => item.styles === style));
    } else if (stores.length > 0) {
      newData = data.filter(item =>
        item.stores.find(store => stores.includes(store.title)),
      );
    } else if (itemStyles.length > 0) {
      newData = data.filter(item =>
        itemStyles.find(style => item.styles === style),
      );
    }
    return newData;
  };

  resetFilter = () => {
    this.setState({
      filteredStores: [],
      filteredStyles: [],
    });
  };
  resetToggle = () => {
    this.setState({
      toggleStores: false,
      toggleStyles: false,
    });
  };
  setDisplayFilter = isDisplay => {
    this.setState({displayFilter: isDisplay});
  };
  displayFilter = () => this.state.displayFilter;

  toggleStores = () => {
    this.setState({toggleStores: !this.state.toggleStores});
  };

  getToggleStores = () => this.state.toggleStores;
  getToggleStyles = () => this.state.toggleStyles;

  toggleStyles = () => {
    this.setState({toggleStyles: !this.state.toggleStyles});
  };

  addfilterStore = storeName => {
    !this.state.filteredStores.includes(storeName)
      ? this.setState({
          filteredStores: [...this.state.filteredStores, storeName],
        })
      : this.setState({
          filteredStores: this.state.filteredStores.filter(
            store => store !== storeName,
          ),
        });
  };
  getfilterStore = () => this.state.filteredStores;

  addfilterStyle = styleName => {
    !this.state.filteredStyles.includes(styleName)
      ? this.setState({
          filteredStyles: [...this.state.filteredStyles, styleName],
        })
      : this.setState({
          filteredStyles: this.state.filteredStyles.filter(
            style => style !== styleName,
          ),
        });
  };
  getfilterStyle = () => this.state.filteredStyles;

  render() {
    const {stores, itemStyles, items, navigation} = this.props;
    let newItems =
      this.getfilterStore().length > 0 || this.getfilterStyle().length > 0
        ? this.filterHelper(items, this.getfilterStore(), this.getfilterStyle())
        : items;

    return (
      <View style={{flex: 1}}>
        <FilterModal
          resetFilter={this.resetFilter}
          setDisplayFilter={this.setDisplayFilter}
          displayFilter={this.displayFilter}
          toggleStores={this.toggleStores}
          toggleStyles={this.toggleStyles}
          addfilterStore={this.addfilterStore}
          addfilterStyle={this.addfilterStyle}
          getfilterStore={this.getfilterStore}
          getfilterStyle={this.getfilterStyle}
          stores={stores}
          itemStyles={itemStyles}
          getToggleStores={this.getToggleStores}
          getToggleStyles={this.getToggleStyles}
          resetToggle={this.resetToggle}
        />

        <ScrollView style={styles.allItemsContainer}>
          <View style={styles.sortItems}>
            <View style={styles.itemFilter}>
              <Text style={styles.sortItemsText}>Sort</Text>
              <Image
                style={styles.dropdown}
                source={require('../../assets/icons/dropdown.png')}
              />
            </View>
            <View style={styles.itemFilter}>
              <Text style={styles.sortItemsText}>Tags</Text>
              <Image
                style={styles.dropdown}
                source={require('../../assets/icons/dropdown.png')}
              />
            </View>
            <TouchableOpacity
              style={styles.itemFilter}
              onPress={() =>
                this.setState({
                  displayFilter: !this.state.displayFilter,
                })
              }>
              <Text style={styles.sortItemsText}>Filter</Text>
              {(this.getfilterStore().length > 0 || this.getfilterStyle().length > 0) ?
                <Image
                  style={styles.dropdown}
                  source={require('../../assets/icons/activefilter.png')}
                /> :
                <Image
                  style={styles.dropdown}
                  source={require('../../assets/icons/inactivefilter.png')}
                />
              }

            </TouchableOpacity>
          </View>
          <View style={styles.allItems}>
            {newItems && newItems.length > 0 ? (
              newItems.map(item => {
                return (
                  <ItemList item={item} navigation={navigation} key={item.id} />
                );
              })
            ) : (
              <View>
                <Text>
                  Sorry No Available Items At This Time, Please Try Again
                </Text>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default FilterList;
