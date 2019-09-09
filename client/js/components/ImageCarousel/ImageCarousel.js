import React from 'react';
import {View, Image, ImageBackground} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import styles from './styles';

export class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    };
  }
  _renderItem = ({item}) => (
    <View style={styles.imageContainer}>
      <ImageBackground source={{uri: item}} style={styles.image}>
        <Image
          style={styles.itemHeart}
          source={require('../../assets/inactiveheart.png')}
        />
      </ImageBackground>
    </View>
  );

  render() {
    const {images} = this.props;
    return (
      <View style={styles.carousel}>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          style={styles.carousel}
          data={images}
          renderItem={this._renderItem}
          sliderWidth={375}
          itemWidth={380}
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

export default ImageCarousel;
