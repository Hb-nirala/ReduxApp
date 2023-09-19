import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HeaderBoldText = ({headerTitle}) => {
  return (
    <View style={styles.headerViewStyle}>
      <Text style={styles.headerTextTitleStyle}>{headerTitle}</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    headerTextTitleStyle:{
        fontSize:20,
        color:'rgba(0,0,50,0.9)',
        fontStyle:'normal',
        fontWeight:'bold',
    },
    headerViewStyle:{
        marginVertical:10,
    }
})
export default HeaderBoldText