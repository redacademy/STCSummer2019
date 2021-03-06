import React from 'react';
import {View, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
export class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    };
  }

  _renderItem = (item, faveIds, createFave, deleteFave, id) => (
    <View style={styles.imageContainer}>
      <View style={styles.itemImageContainer}>
        <Image source={{uri: item}} style={styles.image} />
      </View>

      <View style={styles.heartContainer}>
        <TouchableOpacity
          onPress={() => {
            faveIds.includes(id) ? deleteFave(id) : createFave(id);
          }}>
          {faveIds && faveIds.includes(id) ? (
            <Image
              style={styles.itemHeart}
              resizeMode="cover"
              source={require('../../assets/icons/activeheart.png')}
            />
          ) : (
            <Image
              style={styles.itemHeart}
              resizeMode="cover"
              source={require('../../assets/icons/inactiveheart.png')}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );

  render() {
    const {images, id, createFave, deleteFave, faveIds} = this.props;

    return (
      <View style={styles.carousel}>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          style={styles.carousel}
          data={images}
          renderItem={({item}) =>
            this._renderItem(item, faveIds, createFave, deleteFave, id)
          }
          activeSlideAlignment="center"
          sliderWidth={370}
          itemWidth={376}
          onSnapToItem={index => this.setState({activeSlide: index})}
        />
        <Pagination
          dotsLength={images.length}
          activeDotIndex={this.state.activeSlide}
          containerStyle={styles.containerStyle}
          dotStyle={styles.dotStyle}
          inactiveDotStyle={styles.inactiveDotStyle}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    );
  }
}
ImageCarousel.propTypes = {
  images: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  createFave: PropTypes.func.isRequired,
  deleteFave: PropTypes.func.isRequired,
  faveIds: PropTypes.array.isRequired,
};

export default ImageCarousel;
