import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
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
    style={styles.modalStyle}
    backdropOpacity={0.4}
    onBackdropPress={() => setDisplayFilter(false)}>
    <View style={{flex: 1}}>
      <View style={styles.filterStyle}>
        <Text>Filter</Text>

        <TouchableOpacity
          onPress={() => {
            resetFilter();
            resetToggle();
          }}>
          <Text>Clear All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.heightStyle}>
        <TouchableOpacity onPress={() => toggleStores()}>
          <Text style={styles.textStyle}>Stores</Text>
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
          <Text style={styles.textStyle}>Styles</Text>
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
      <View style={styles.applyFilter}>
        <TouchableOpacity onPress={() => setDisplayFilter(false)}>
          <Text>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);
export default FilterModal;

