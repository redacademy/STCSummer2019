import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FaveBrandsContext from '../../context/FaveBrandsContext';

const Brand = ({ brand }) => {
  return (
    <FaveBrandsContext.Consumer>
      {
        ({ faveBrandIds, removeFaveBrand, createFaveBrand }) => {
          return (
            <View>
              <Text>Brand Page</Text>
              <Text>{brand.title}</Text>
              <TouchableOpacity
                onPress={() => removeFaveBrand(brand.id)}
                activeOpacity={0.5}
              >
                <Text>Remove From Faves</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => createFaveBrand(brand.id)}
                activeOpacity={0.5}
              >
                <Text>Add To Faves</Text>
              </TouchableOpacity>
            </View>
          )
        }
      }
    </FaveBrandsContext.Consumer>
  );
};

export default Brand;
