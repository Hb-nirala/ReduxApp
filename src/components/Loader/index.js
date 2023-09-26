import { View, Text, StyleSheet ,Modal} from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import { BlurView } from '@react-native-community/blur';

const Loader = ({showLoader}) => {

  return (
    <Modal
      visible={showLoader}
      transparent={true}
      animationType='fade'
    > 
      <BlurView 
      style={styles.mainContainer}
      blurRadius={8}
      blurAmount={10}
      blurType='light'>
      <LottieView
        source={require('../../../assets/Lottie/Loder.json')}
        autoPlay={true}
        loop={true}
        speed={1}
        style={styles.lottieContainer}
      />
      </BlurView>
    </Modal>
  )
}
const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    flex: 1,
    // backgroundColor: 'white',
    alignItems: 'center',
  },
  lottieContainer: {
    alignSelf: 'center',
    width: 300,
    height: 300,
  }
});
export default Loader