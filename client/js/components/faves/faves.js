import React from 'react';
import {Text, View, Image, ImageBackground} from 'react-native';
import styles from './styles';

const Faves = ({
  stores,
  brands,
  navigation,
  items,
  faveItemIds,
  removeFaveItem,
  faveBrandIds,
  removeFaveBrand,
  faveStoreIds,
  removeFaveStore,
}) => {
  return (
    <View>
      {faveItemIds.length > 0 ? (
        <Item items={items} faveItemIds={faveItemIds} />
      ) : (
        <View style={styles.container}>
          <Text style={styles.favesText}> You have no favorites. </Text>
        </View>
      )}

      {faveBrandIds.length > 0 ? (
        <Brand brands={brands} faveBrandIds={faveBrandIds} />
      ) : (
        <View style={styles.container}>
          <Text style={styles.favesText}> You have no favorites. </Text>
        </View>
      )}

      {/* {faveStoreIds.length > 0 ? (
        <Browse />
      ) : (
        <View style={styles.container}>
          <Text style={styles.favesText}> You have no favorites. </Text>
        </View>
      )} */}
    </View>
  );
};

export default Faves;
