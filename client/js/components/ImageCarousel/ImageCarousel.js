import React, {Fragment} from 'react';
import {View, Image} from 'react-native';
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
      <Image source={{uri: item}} style={styles.image} />
    </View>
  );

  render() {
    const {images} = this.props;
    return (
      <Fragment style={styles.carousel}>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          style={styles.carousel}
          data={images}
          renderItem={this._renderItem}
          sliderWidth={375}
          itemWidth={375}
          onSnapToItem={index => this.setState({activeSlide: index})}
        />
        <Pagination
          dotsLength={images.length}
          activeDotIndex={this.state.activeSlide}
          containerStyle={{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            position: 'absolute',
            bottom: '15%',
            alignItems: 'center',
            width: '100%',
          }}
          dotStyle={{
            width: 15,
            height: 15,
            borderRadius: 10,
            marginHorizontal: 8,
            backgroundColor: 'blue',
          }}
          inactiveDotStyle={{
            backgroundColor: 'grey',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </Fragment>
    );
  }
}

export default ImageCarousel;
