import { View, Text, StyleSheet, Dimensions, Button, TouchableOpacity, Image,ScrollView, Platform, BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchNews } from '../../Redux/thunkActions'
import { fetchData, getApiCall } from '../../Redux/thunkReducer'
import Icon from 'react-native-vector-icons/AntDesign'
import HeaderBoldText from '../../components/Text/HeaderBoldText'
import { Api, ApiTabImages, TabHeaderTitle } from '../../utils/appStrings'
import FontRegularText from '../../components/Text/FontRegularText'
import FontMediumText from '../../components/Text/FontMediumText'

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

const ApiCall = (props) => {

    useEffect(() => {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', backButtonHandler)
        }
        return () => {
            if (Platform.OS === 'android') {
                BackHandler.remove()
            }
        }
        // BackHandler.exitApp()
        // return () => BackHandler.removeEventListener('hardwareBackPress', backButtonHandler)
    }, [])

    const backButtonHandler = () => {
        props.navigation.navigate('Home')
        return true
    }

    return (
        <View style={styles.viewStyle}>
            <HeaderBoldText>{TabHeaderTitle.api}</HeaderBoldText>
            <ScrollView style={styles.containerStyle} showsVerticalScrollIndicator={false}>
                <FontMediumText style={styles.titleStyle}>{Api.get_api_title}</FontMediumText>
                <FontRegularText style={styles.descriptionTextStyle}>{Api.get_api_description}</FontRegularText>
                <TouchableOpacity style={styles.button} onPress={() => { props.navigation.navigate('ThunkResponseData') }}>
                    <Text>{Api.get_api_buttonText}</Text>
                    <Image
                        style={styles.logoImageStyle}
                        source={{ uri: ApiTabImages.get_api_image }}
                        resizeMode='cover' />
                </TouchableOpacity>
                <FontMediumText style={styles.titleStyle}>{Api.call_post_api_title}</FontMediumText>
                <FontRegularText style={styles.descriptionTextStyle}>{Api.post_api_description}</FontRegularText>
                <TouchableOpacity style={styles.button} onPress={() => { props.navigation.navigate('ThunkPostData') }}>
                    <Text>{Api.call_post_api}</Text>
                    <Image
                        style={styles.logoImageStyle}
                        source={{ uri: ApiTabImages.get_api_image }}
                        resizeMode='cover' />
                </TouchableOpacity>
                <FontMediumText style={styles.titleStyle}>{Api.call_get_response_title}</FontMediumText>
                <FontRegularText style={styles.descriptionTextStyle}>{Api.call_get_response_description}</FontRegularText>
                <TouchableOpacity style={styles.button} onPress={() => { props.navigation.navigate('ApiResponse') }}>
                    <Text>{Api.call_get_response_api}</Text>
                    <Image
                        style={styles.logoImageStyle}
                        source={{ uri: ApiTabImages.get_api_image }}
                        resizeMode='cover' />
                </TouchableOpacity>
            </ScrollView>
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
        alignItems: 'center',
        width: deviceWidth-20,
        // backgroundColor: 'red',
        // padding: 10,
        marginVertical: 10,
        backgroundColor:'rgba(99, 141, 145,0.5)',
        borderRadius:20,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        paddingVertical:10,
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
    titleStyle:{
        fontSize:18,
        color:'black',
        fontStyle:'normal',
        textAlign:'left',
        // fontWeight:'800',
    },
    containerStyle:{
        width:deviceWidth-20,
        marginHorizontal:10
    },
    descriptionTextStyle:{
        color:'black',
        fontSize:17,
        fontWeight:'200',
        textAlign:'justify',
        paddingVertical:5,
    },
    logoImageStyle:{
        width:50,
        height:50,
        borderRadius:10,
    }
})
export default ApiCall