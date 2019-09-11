import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import styles from './styles';
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
  return (
    <ScrollView>
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
            <Text style={styles.text}> Build your personal catalogue </Text>
            <Text style={styles.subText}>
              {' '}
              Start favouriting styles and clothes you like to build your
              personal catalogue{' '}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Browse');
              }}>
              <Text style={styles.browseTxt}> Browse Clothes </Text>
            </TouchableOpacity>
          </View>
        ))}

      {displayscreen.brands &&
        (brands.length > 0 ? (
          brands.map(brand => (
            <TouchableOpacity
              onPress={() => navigation.navigate('brand', {brand: item})}>
              <Brand brands={brands} />
            </TouchableOpacity>
          ))
        ) : (
          <View>
            <Text style={styles.text}> See the brands you want </Text>
            <Text style={styles.subText}>
              {' '}
              Curate your own personal brand by favouriting the brands that
              represent you.{' '}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Stores&Brands')}>
              <Text style={styles.browseTxt}> Browse Brands </Text>
            </TouchableOpacity>
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
            <View style={styles.containerImg}>
              <Image
                style={styles.iconImg}
                source={require('../../assets/icons/heart.png')}
              />
            </View>
            <Text style={styles.text}>
              {' '}
              Keep track of your favourite stores!{' '}
            </Text>
            <Text style={styles.subText}>
              {' '}
              Favourite stores to get notifications of sales and new arrivals !{' '}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Stores&Brands')}>
              <Text style={styles.browseTxt}>Browse Stores</Text>
            </TouchableOpacity>
          </View>
        ))}
    </ScrollView>
  );
};

export default Faves;
