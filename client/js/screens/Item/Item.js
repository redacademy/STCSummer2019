import React, {Component} from 'react';
import {View, Text} from 'react-native';
import ImageCarousel from '../../components/ImageCarousel';
import styles from './styles';
import RNPickerSelect from 'react-native-picker-select';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {item} = this.props;
    console.log(item);

    componentDidMount = () => {
      //TODO
      // make color and sizes array into an array of objects
      //[{label:color, value:color}]
    };

    return (
      <View>
        <ImageCarousel style={styles.carousel} images={item.images} />
        <View style={styles.singleItem}>
          <View style={styles.itemInfo}>
            <Text style={styles.itemBrand}>{item.brand.title}</Text>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemTags}>Tags: {item.tags[0]}</Text>
          </View>
          <View style={styles.allDropdown}>
            <View style={styles.sizedropdown}>
              {/*              
                <RNPickerSelect
                  onValueChange={value => console.log(value)}
                  items={[{label: thisSize, value: thisSize}]}
                  placeholder={{label: 'Size', value: ''}}
                />
             */}
            </View>
            <View style={styles.dropdown}>
              {/* <RNPickerSelect
                  onValueChange={value => console.log(value)}
                  items={[
                    {
                      label: thisColor,
                      value: thisColor,
                    },
                  ]}
                  placeholder={{label: 'Color', value: ''}}
                />
            */}
            </View>
          </View>
        </View>
      </View>
    );
  }
}
