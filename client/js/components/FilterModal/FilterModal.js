import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Modal from 'react-native-modal';
const FilterModal = ({
  resetFilter,
  displayFilter,
  setDisplayFilter,
  getToggleStores,
  getToggleStyles,
  toggleStores,
  toggleStyles,
  resetToggle,
  addfilterStore,
  addfilterStyle,
  getfilterStyle,
  getfilterStore,
  stores,
  itemStyles,
}) => (
  <Modal
    animationIn={'slideInRight'}
    animationOut={'slideOutRight'}
    isVisible={displayFilter()}
    style={{
      height: '100%',
      backgroundColor: 'white',
      margin: 0,
      marginLeft: 100,
      justifyContent: 'flex-start',
    }}
    backdropOpacity={0.4}
    onBackdropPress={() => setDisplayFilter(false)}>
    <View style={{flex: 1}}>
      <View
        style={{
          height: '10%',
          backgroundColor: '#E0D5C4',
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          paddingHorizontal: '3%',
        }}>
        <Text>Filter</Text>

        <TouchableOpacity
          onPress={() => {
            resetFilter();
            resetToggle();
          }}>
          <Text>Clear All</Text>
        </TouchableOpacity>
      </View>
      <View style={{height: '80%'}}>
        <TouchableOpacity onPress={() => toggleStores()}>
          <Text style={{fontSize: 20}}>Stores</Text>
        </TouchableOpacity>
        {getToggleStores() &&
          stores.map(store => (
            <TouchableOpacity onPress={() => addfilterStore(store)} key={store}>
              <Text>{store}</Text>
              {getfilterStore().includes(store) && (
                <Image source={require('../../assets/icons/checkmark.png')} />
              )}
            </TouchableOpacity>
          ))}
        <TouchableOpacity onPress={() => toggleStyles()}>
          <Text style={{fontSize: 20}}>Styles</Text>
        </TouchableOpacity>
        {getToggleStyles() &&
          itemStyles.map((itemStyle, index) => (
            <TouchableOpacity
              onPress={() => addfilterStyle(itemStyle)}
              key={index}>
              <Text>{itemStyle}</Text>
              {getfilterStyle().includes(itemStyle) && (
                <Image source={require('../../assets/icons/checkmark.png')} />
              )}
            </TouchableOpacity>
          ))}
      </View>
      <View
        style={{
          height: '10%',
          backgroundColor: '#E0D5C4',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => setDisplayFilter(false)}>
          <Text>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);
export default FilterModal;
