import React from 'react';
import {Text, View, Image} from 'react-native';

const ItemList = ({item}) => {
  return (
    <View>
      <Image style={{width: 50, height: 50}} source={{uri: item.images[0]}} />
      <Text>
        {item.title}-{item.brand.title}
      </Text>
    </View>
  );
};

export default ItemList;
