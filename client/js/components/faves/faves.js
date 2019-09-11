import React from './node_modules/react';
import {Text, View, Image, ScrollView} from 'react-native';
import styles from './styles';
import ItemList from '../ItemList';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Faves = ({
  stores,
  brands,
  items,
  faveItemIds,
  removeFaveItem,
  faveBrandIds,
  removeFaveBrand,
  faveStoreIds,
  removeFaveStore,
  navigation,
  displayscreen,
}) => {
  // let getFavitems;
  // let item = items;

  // if (item != null) {
  //   getFavitems = items.map(item => (
  //     <View key={item.id} style={{margin: 10}}>
  //       <TouchableOpacity
  //         onPress={() => {
  //           navigation.navigate('singleItem', {item: item});
  //         }}>
  //         <View style={{flexDirection: 'row'}}>
  //           <Image
  //             resizeMode="cover"
  //             source={{uri: item.images[0]}}
  //             style={styles.itemImage}
  //           />
  //         </View>
  //       </TouchableOpacity>
  //     </View>
  //   ));
  // } else {
  //   getFavitems = (
  //     <View>
  //       <Text> You have no favorites. </Text>
  //     </View>
  //   );
  // }

  // let getFavStore;
  // let store = stores;

  // if (store != null) {
  //   getFavStore = stores.map(store => (
  //     <TouchableOpacity onPress={() => navigation.navigate('store', {store})}>
  //       <View>
  //         <Image source={{uri: store.storeLogo}} style={styles.storeImage} />
  //       </View>
  //     </TouchableOpacity>
  //   ));
  // } else {
  //   getFavStore = (
  //     <View>
  //       <Text> You have no favorites. </Text>
  //     </View>
  //   );
  // }
  console.log('displayscreen', displayscreen);

  return (
    <ScrollView>
      {/* {getFavitems} */}
      {/* {getFavStore} */}

      {displayscreen.items &&
        (items.length > 0 ? (
          items.map(item => (
            <View key={item.id} style={{margin: 10}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('singleItem', {item: item});
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    resizeMode="cover"
                    source={{uri: item.images[0]}}
                    style={styles.itemImage}
                  />
                </View>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <View>
            <Text> You have no favorites. </Text>
          </View>
        ))}

      {displayscreen.brands &&
        (brands.length > 0 ? (
          brands.map(brand => (
            <TouchableOpacity
              onPress={() => navigation.navigate('brand', {brand: item})}>
              <Brand brands={brands} faveBrandIds={faveBrandIds} />
            </TouchableOpacity>
          ))
        ) : (
          <View>
            <Text> You have no favorites. </Text>
          </View>
        ))}

      {displayscreen.stores &&
        (stores.length > 0 ? (
          stores.map(store => (
            <TouchableOpacity
              onPress={() => navigation.navigate('store', {store})}>
              <Image
                source={{uri: store.storeLogo}}
                style={styles.storeImage}
              />
            </TouchableOpacity>
          ))
        ) : (
          <View>
            <Text> You have no favorites. </Text>
          </View>
        ))}

      {/* {faveStoreIds.length > 0 ? (
        <Browse />
      ) : (
        <View style={styles.container}>
          <Text style={styles.favesText}> You have no favorites. </Text>
        </View>
      )} */}
    </ScrollView>
  );
};

export default Faves;
