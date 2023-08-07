import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../../Redux/thunkActions'
import { View, Text } from 'react-native'

const ThunkResponseData = () => {

  const dispatch = useDispatch()

  const news = useSelector((state) => state)
  console.log("news===",news);

  useEffect(() => {
    dispatch(fetchNews())
  }, [])

  return (
    <View>
      <Text>Hii</Text>
    </View>
  )
}

export default ThunkResponseData