import React, { Component } from 'react';
import { View, Easing, Animated } from 'react-native';
import styles from './styles';

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.spinValue = new Animated.Value(0);
  }
  componentDidMount() {
    this.spin();
  }

  spin = () => {
    this.spinValue.setValue(0)
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
    }).start(() => this.spin())
  }
  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    return (
      <View style={styles.loaderContainer}>
        <Animated.Image
          style={{ resizeMode: "contain", width: "80%", height: "50%", transform: [{ rotate: spin }] }}
          source={require('../../assets/logo.png')} />
      </View>
    );
  }
}

export default Loader;
