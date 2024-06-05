import { View, StyleSheet } from 'react-native'
import React from 'react'
import HeaderBoldText from '../Text/HeaderBoldText'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { appDimension } from '../../utils/globalConstant'
import CloseIcon from 'react-native-vector-icons/AntDesign'

const HeaderView = ({ Title, titleStyle, onBackPress, style, rightIconPress }) => {
  return (
    <View style={[styles.headerViewStyle, style]}>
      {onBackPress ?
        <TouchableOpacity onPress={onBackPress} style={styles.backIconStyle}>
          <Icon
            name='arrow-back-sharp'
            size={27}
            color={'black'}
            onPress={onBackPress}
          />
        </TouchableOpacity>
        :
        <View style={styles.blankViewStyle} />}
      <HeaderBoldText style={[styles.textStyle, titleStyle]}>{Title}</HeaderBoldText>
      {rightIconPress ?
        <CloseIcon
          name='closecircle'
          size={27}
          color={'black'}
          onPress={rightIconPress}
        />
        :
        <View style={styles.blankViewStyle} />
      }
    </View>
  )
}
const styles = StyleSheet.create({
  backIconStyle: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 17,
    marginLeft: 5
  },
  headerViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: appDimension.deviceWidth - 10,
    alignItems: 'center'
  },
  textStyle: {
  },
  blankViewStyle: {
    width: 27,
    height: 27,
  }
})
export default HeaderView