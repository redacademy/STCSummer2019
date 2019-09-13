import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import BrowseItem from '../../components/BrowseItem';

const Browse = ({navigation, data}) => {
  return (
    <ScrollView>
      <BrowseItem navigation={navigation} data={data} />
    </ScrollView>
  );
};

export default Browse;
