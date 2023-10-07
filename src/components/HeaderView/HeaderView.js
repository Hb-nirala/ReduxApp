import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HeaderBoldText from '../Text/HeaderBoldText'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { appDimension } from '../../utils/globalConstant'

const HeaderView = ({ Title, titleStyle, onPress,style }) => {
  return (
    <View style={[styles.headerViewStyle,style]}>
      {onPress ?
        <TouchableOpacity onPress={onPress} style={styles.backIconStyle}>
          <Icon
            name='arrow-back-sharp'
            size={27}
            color={'black'}
          />
        </TouchableOpacity>
        :
        null}
      <HeaderBoldText style={[styles.textStyle, titleStyle]}>{Title}</HeaderBoldText>
    </View>
  )
}
const styles = StyleSheet.create({
  backIconStyle:{
    // backgroundColor:'red',
    width:35,
    height:35,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:17,
    marginLeft:5
  },
  headerViewStyle:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:appDimension.deviceWidth*0.68,
    // backgroundColor:'green',
    // marginHorizontal:10,
    alignItems:'center'
  },
  textStyle:{
    // backgroundColor:'red',
    // alignSelf:'center'
  }
})
export default HeaderView