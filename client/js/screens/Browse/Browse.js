import React from 'react';
import {ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import BrowseItem from '../../components/BrowseItem';

const Browse = ({navigation, data}) => {
  return (
    <ScrollView>
      <BrowseItem navigation={navigation} data={data} />
    </ScrollView>
  );
};

Browse.propTypes = {
  navigation: PropTypes.object.isRequired,
};
export default Browse;
