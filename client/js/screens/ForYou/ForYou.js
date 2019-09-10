import React from 'react';
import { View, Text } from 'react-native';

const ForYou = ({ items }) => {
  return (
    <View>
      {
        items.map((item) => <Text>{item.title}</Text>)
      }
    </View>
  );
};

export default ForYou;
