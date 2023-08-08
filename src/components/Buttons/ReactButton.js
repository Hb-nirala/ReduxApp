import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { appDimension } from '../../utils/globalConstant'

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
    width: appDimension.deviceWidth / 2,
    borderRadius:15,
  },
})
export default ReactButton