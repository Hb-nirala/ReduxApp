import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const ReactButton = ({ style, onPress, buttonTitle, color }) => {
  return (
    <View style={[styles.button, style]}>
      <Button title={buttonTitle} onPress={onPress} color={color ? color : 'rgba(0,0,50,0.9)'} />
    </View>
  )
}
const styles = StyleSheet.create({
  button: {
    marginVertical: 30,
    width: deviceWidth / 2,
    borderRadius:15,
  },
})
export default ReactButton