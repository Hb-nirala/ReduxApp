import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, StyleSheet, FlatList,Dimensions } from 'react-native'
import { getUsers } from '../../../Redux/ApiCalls/newsSlice'
import Icon from 'react-native-vector-icons/AntDesign'
import HeaderView from '../../../components/HeaderView/HeaderView'


const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

const ThunkResponseData = (props) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  const news = useSelector((state) => state.users.data)
  const loading = useSelector((state) => state.users.loading)

  // console.log("news ====", news);
  // console.log("loading==", loading);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemViewStyle}>
        {item.id ? <Text style={styles.itemTextStyle}>ID : {item.id}</Text> : null}
        <View style={styles.nameViewStyle}>
          {item.name.firstname ? <Text style={styles.itemNameTextStyle}>{item.name.firstname}</Text> : null}
          {item.name.lastname ? <Text style={styles.itemNameTextStyle}>{item.name.lastname}</Text> : null}
        </View>
        {item.email ? <Text style={styles.itemTextStyle}>Email : {item.email}</Text> : null}
      </View>
    )
  }

  return (
    <View style={styles.viewStyle}>
      <HeaderView
      Title={`User's Data`}
      onBackPress={()=>{props.navigation.goBack()}}
      />
      {loading ? <Text>Loading...</Text> :
        <FlatList
          data={news}
          style={{ flex: 1 }}
          renderItem={renderItem}
        />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: deviceWidth * 0.7,
    // backgroundColor:'red',
    paddingVertical: 10,
    alignSelf: 'flex-start',
    marginHorizontal: 10,
  },
  viewStyle: {
    flex: 1,
    backgroundColor: 'rgb(225,245,230)',
    // alignItems: 'center',
  },
  salutationStyle: {
    fontSize: 20,
    color: 'rgb(234,100,255)',
    fontStyle: 'italic',
    alignSelf: 'center',
  },
  nameViewStyle: {
    flexDirection: 'row',
  },
  itemViewStyle: {
    width: deviceWidth - 20,
    backgroundColor: 'rgb(0,0,50)',
    alignSelf: 'center',
    padding: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 20,
    // flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemTextStyle: {
    color: 'rgb(255,255,255)',
    fontSize: 15,
  },
  itemNameTextStyle: {
    color: 'rgb(255,255,255)',
    fontSize: 15,
    marginRight: 5,
  }
})

export default ThunkResponseData