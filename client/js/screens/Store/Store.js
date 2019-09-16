import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FaveStoresContext from '../../context/FaveStoresContext';
import ImageCarousel from '../../components/ImageCarousel'
import PropTypes from 'prop-types';
const Store = ({ store }) => {
  return (
    <FaveStoresContext.Consumer>
      {
        ({ faveStoreIds, removeFaveStore, createFaveStore }) => {
          return (
            <View>
              <Text>Store Page</Text>
              <Text>{store.title}</Text>

              <ImageCarousel images={store.images} id={store.id} faveIds={faveStoreIds} createFave={createFaveStore} deleteFave={removeFaveStore} />
              <TouchableOpacity
                onPress={() => removeFaveStore(store.id)}
                activeOpacity={0.5}
              >
                <Text >Remove From Faves</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => createFaveStore(store.id)}
                activeOpacity={0.5}
              >
                <Text>Add To Faves</Text>
              </TouchableOpacity>
            </View>
          )
        }
      }
    </FaveStoresContext.Consumer >
  );
};
Store.propTypes = {
  store: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    items: PropTypes.array,
    brands: PropTypes.array,
    images: PropTypes.array.isRequired,
    storeLogo: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
    hours: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    sale: PropTypes.number.isRequired,
    saledescription: PropTypes.string,
    storelink: PropTypes.bool.isRequired
  })
}
export default Store;
