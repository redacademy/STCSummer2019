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
    style={styles.modalContainer}
    backdropOpacity={0.4}
    onBackdropPress={() => setDisplayFilter(false)}>
    <View style={{flex: 1}}>
      <View style={styles.filterHeader}>
        <Text style={styles.filterHeaderText}>Filter</Text>
        <TouchableOpacity
          style={styles.clearContainer}
          onPress={() => {
            resetFilter();
            resetToggle();
          }}>
          <Text style={styles.clear}>Clear All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.filterContainer}>
        <TouchableOpacity onPress={() => toggleStores()}>
          <View style={styles.filterTitleContainer}>
            <Text style={styles.filterTitle}>Stores</Text>
          </View>
        </TouchableOpacity>
        {getToggleStores() &&
          stores.map(store => (
            <TouchableOpacity
              onPress={() => addfilterStore(store)}
              key={store.id}>
              <View style={styles.filterOptionContainer}>
                <Text style={styles.filterOptionText}>{store}</Text>
                <View style={styles.checkContainer}>
                  {getfilterStore().includes(store) && (
                    <Image
                      source={require('../../assets/icons/checkmark.png')}
                      style={styles.check}
                    />
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        <TouchableOpacity onPress={() => toggleStyles()}>
          <View style={styles.filterTitleContainer}>
            <Text style={styles.filterTitle}>Styles</Text>
          </View>
        </TouchableOpacity>
        {getToggleStyles() &&
          itemStyles.map((itemStyle, index) => (
            <TouchableOpacity
              onPress={() => addfilterStyle(itemStyle)}
              key={(itemStyle, index)}>
              <View style={styles.filterOptionContainer}>
                <Text style={styles.filterOptionText}>{itemStyle}</Text>
                <View style={styles.checkContainer}>
                  {getfilterStyle().includes(itemStyle) && (
                    <Image
                      source={require('../../assets/icons/checkmark.png')}
                      style={styles.check}
                    />
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))}
      </View>

      <TouchableOpacity
        style={{
          height: '10%',
          backgroundColor: '#E0D5C4',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => setDisplayFilter(false)}>
        <View style={styles.applyContainer}>
          <Text style={styles.apply}>Apply</Text>
        </View>
      </TouchableOpacity>
    </View>
  </Modal>
);
export default FilterModal;
