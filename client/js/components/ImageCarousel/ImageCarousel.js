import React from 'react';
import {View, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import styles from './styles';

export class ImageCarousel extends React.Component {
  _renderItem({item}) {
    return (
      <View style={styles.imageContainer}>
        <Image source={{uri: item}} style={styles.image} />
      </View>
    );
  }

  render() {
    const {images} = this.props;
    return (
      <Carousel
        style={styles.carousel}
        ref={c => {
          this._carousel = c;
        }}
        data={images}
        renderItem={this._renderItem}
        sliderWidth={375}
        itemWidth={375}
      />
    );
  }
}

export default ImageCarousel;
