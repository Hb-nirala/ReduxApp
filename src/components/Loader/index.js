import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

const Loader = () => {

  return (
    <View>
      <LottieView
        source={require('../../../assets/Lottie/Loder_animation.json')}
        autoPlay
      />
    </View>
  )
}
const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
  lottieContainer: {
    alignSelf: 'center',
  },
  mainContainer: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    zIndex: 10
  }
});
export default Loader