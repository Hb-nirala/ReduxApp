import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HeaderBoldText = ({children,style}) => {
  return (
    <View style={styles.headerViewStyle}>
      <Text style={[styles.headerTextTitleStyle,style]}>{children}</Text>
    </View>
  )
}
const styles=StyleSheet.create({
  headerTextTitleStyle: {
    fontSize: 20,
    fontStyle: 'normal',
    fontFamily: 'Poppins-Bold',
    color: 'black',
    textAlign:'center',
  },
    headerViewStyle:{
        marginVertical:10,
    }
})
export default HeaderBoldText