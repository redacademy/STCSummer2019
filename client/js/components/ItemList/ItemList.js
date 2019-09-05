import React from 'react';
import {Text, View, Image, ImageBackground} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ItemList = ({item, navigation}) => {
  return (
    <View style={styles.fullItem}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('singleItem');
        }}>
        <ImageBackground
          style={styles.itemImage}
          source={{uri: item.images[0]}}>
          <Image
            style={styles.itemHeart}
            source={require('../../assets/inactiveheart.png')}
          />
        </ImageBackground>
        <Text style={styles.itemText}>
          {item.title}-{item.brand.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemList;
