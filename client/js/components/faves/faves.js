import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import styles from './styles';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';

const Faves = ({
  stores,
  brands,
  items,
  faveItemIds,
  faveBrandIds,
  faveStoreIds,
  navigation,
  displayscreen,
}) => {
  return (
    <View style={{marginLeft: 10, marginRight: 10, marginTop: 10}}>
      {displayscreen.items &&
        (items.length > 0 ? (
          <ScrollView>
            <View style={styles.favItemWrapper}>
              {items.map(item => (
                <View style={{width: '50%', height: 235, padding: '1.3%'}}>
                  <TouchableOpacity
                    style={{width: '100%', height: '100%'}}
                    key={item.id}
                    onPress={() => {
                      navigation.navigate('singleItem', {item: item});
                    }}>
                    <Image
                      resizeMode="cover"
                      source={{uri: item.images[0]}}
                      style={styles.itemImage}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </ScrollView>
        ) : (
          <View>
            <View style={styles.containerImg}>
              <Image
                style={styles.iconImg}
                resizeMode="contain"
                source={require('../../assets/icons/heart-dress.png')}
              />
            </View>
            <Text style={styles.text}> Build your personal catalogue </Text>
            <Text style={styles.subText}>
              Start favouriting styles and clothes you like to build your
              personal catalogue
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Browse');
              }}>
              <View style={styles.txtWrapper}>
                <Text style={styles.browseTxt}> Browse Clothes </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}

      {displayscreen.brands &&
        (brands.length > 0 ? (
          <ScrollView>
            {brands.map(brand => (
              <TouchableOpacity
                onPress={() => navigation.navigate('brand', {brand: item})}>
                <Brand brands={brands} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        ) : (
          <View>
            <View style={styles.containerImg}>
              <Image
                style={styles.iconImg}
                resizeMode="contain"
                source={require('../../assets/icons/azheart.png')}
              />
            </View>
            <Text style={styles.text}> See the brands you want </Text>
            <Text style={styles.subText}>
              {' '}
              Curate your own personal brand by favouriting the brands that
              represent you.{' '}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Stores&Brands')}>
              <View style={styles.txtWrapper}>
                <Text style={styles.browseTxt}> Browse Brands </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}

      {displayscreen.stores &&
        (stores.length > 0 ? (
          <ScrollView>
            {stores.map(store => (
              <TouchableOpacity
                onPress={() => navigation.navigate('store', {store})}>
                <Image
                  source={{uri: store.storeLogo}}
                  style={styles.storeImage}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        ) : (
          <View>
            <View style={styles.containerImg}>
              <Image
                style={styles.iconImg}
                resizeMode="contain"
                source={require('../../assets/icons/heart.png')}
              />
            </View>

            <Text style={styles.text}>
              Keep track of your favourite stores!
            </Text>
            <Text style={styles.subText}>
              Favourite stores to get notifications of sales and new arrivals !
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Stores&Brands')}>
              <View style={styles.txtWrapper}>
                <Text style={styles.browseTxt}>Browse Stores</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
    </View>
  );
};

export default Faves;
