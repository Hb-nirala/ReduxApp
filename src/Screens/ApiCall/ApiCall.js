import { View, Text, StyleSheet, Dimensions, Button } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchNews } from '../../Redux/thunkActions'
import { fetchData, getApiCall } from '../../Redux/thunkReducer'

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

const ApiCall = (props) => {
    return (
        <View>
            <Text>ApiCall</Text>
            <View style={styles.button}>
                <Button title={'call get API'} onPress={() => { props.navigation.navigate('ThunkResponseData') }} color={'rgba(0,0,50,0.9)'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginVertical: 10,
        width: deviceWidth / 3,
    },
})
export default ApiCall