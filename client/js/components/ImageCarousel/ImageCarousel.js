import React from 'react';
import { View, Image, ImageBackground } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FaveItemsContext from '../../context/FaveItemsContext';
export class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    };
  }
  _renderItem = ({ item }) => (
    <FaveItemsContext.Consumer>
      {
        ({ faveItemIds, removeFaveItem, createFaveItem }) => {
          return (
            <View style={styles.imageContainer}>
              <View style={styles.itemImageContainer}>
                <Image source={{ uri: item }} style={styles.image} />
              </View>
              <View style={styles.heartContainer}>
                <TouchableOpacity
                  onPress={() => {
                    faveItemIds.includes(this.props.id) ? removeFaveItem(this.props.id) : createFaveItem(this.props.id);
                  }
                  }>
                  {faveItemIds && faveItemIds.includes(this.props.id) ?
                    <Image
                      style={styles.itemHeart}
                      resizeMode='cover'
                      source={require('../../assets/activeheart.png')}
                    /> : <Image
                      style={styles.itemHeart}
                      resizeMode='cover'
                      source={require('../../assets/inactiveheart.png')}
                    />
                  }
                </TouchableOpacity>
              </View>
            </View>)
        }
      }
    </FaveItemsContext.Consumer>
  );

  render() {
    const { images } = this.props;

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
          onSnapToItem={index => this.setState({ activeSlide: index })}
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
