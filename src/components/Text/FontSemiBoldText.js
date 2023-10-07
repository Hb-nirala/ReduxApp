import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FontSemiBoldText = ({children,style}) => {
  return (
      <Text style={[styles.textStyle,style]}>{children}</Text>
  )
}
const styles=StyleSheet.create({
    textStyle:{
        fontSize:10,
        fontFamily:'Poppins-SemiBold',
        textAlign:'center',
        color:'black',
    }
})
export default FontSemiBoldText