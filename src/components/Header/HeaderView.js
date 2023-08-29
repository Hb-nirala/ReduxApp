import { View, Text } from 'react-native'
import React from 'react'

const Header = ({HeaderTitle,}) => {
  return (
    <View>
      <Text>{HeaderTitle}</Text>
    </View>
  )
}

export default Header