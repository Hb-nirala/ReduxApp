import { View, Text, StyleSheet, Dimensions, Button } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchNews } from '../../Redux/thunkActions'
import { fetchData, getApiCall } from '../../Redux/thunkReducer'
import Icon from 'react-native-vector-icons/AntDesign'

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

const ApiCall = (props) => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.headerStyle}>
                <Icon name='arrowleft' size={25} onPress={() => { props.navigation.goBack() }} color='black' style={{}} />
                <Text style={styles.salutationStyle}>API Integration</Text>
            </View>
            <View style={styles.button}>
                <Button title={'call get API'} onPress={() => { props.navigation.navigate('ThunkResponseData') }} color={'rgba(0,0,50,0.9)'} />
            </View>
            <View style={styles.postButton}>
                <Button title={'Go to call post API'} onPress={() => { props.navigation.navigate('ThunkPostData') }} color={'rgba(0,0,50,0.9)'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    postButton: {
        marginVertical: 10,
        width: deviceWidth / 2,
        borderRadius: 15,
    },
    button: {
        marginVertical: 10,
        width: deviceWidth / 3,
        borderRadius: 15,
    },
    viewStyle: {
        flex: 1,
        backgroundColor: 'rgb(225,245,230)',
        alignItems: 'center',
    },
    headerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: deviceWidth * 0.65,
        // backgroundColor:'red',
        paddingVertical: 10,
        alignSelf: 'flex-start',
        marginHorizontal: 10,
    },
    salutationStyle: {
        fontSize: 20,
        color: 'rgb(234,100,255)',
        fontStyle: 'italic',
        alignSelf: 'center',
    },
})
export default ApiCall