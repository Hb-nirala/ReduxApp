import { View, Text, StyleSheet, Dimensions, Button, FlatList, Alert, BackHandler ,ScrollView,Platform} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onDeleteData, } from '../../Redux/productReducer'
import { onUserLogout } from '../../Redux/loginReducer'
import { setEditItem } from '../../Redux/editProductItemReducer'
import Loader from '../../components/Loader'
import ButtonWithImage from '../../components/ButtonWithImage/ButtonWithImage'
import { HomeTabImages, HomeTabString } from '../../utils/appStrings'
const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height  

const Home = (props) => { 
    const [showLoader,setShowLoader]=useState(false) 
    const authorizedUserData = useSelector((state) => state.Login.value.authUserData)
    const productReducerData = useSelector((state) => state?.Product?.value?.productDataArray)

    useEffect(() => {
        setShowLoader(true)
        setTimeout(() => {
            setShowLoader(false)      
        }, 10000);
    }, [])

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
        BackHandler.exitApp();
        return true
    }

    const dispatch = useDispatch()

    const onLogout = () => {
        Alert.alert('Logout Done')
        dispatch(onUserLogout())
        props.navigation.navigate('Login')
    }

    const onEditItem = (item) => {
        var indexOfEditItem = productReducerData.indexOf(item);
        dispatch(setEditItem({ item, indexOfEditItem }))
        props.navigation.navigate('AddProduct')
    }
    const onDeleteItem = (item) => {
        var indexOfEditItem = productReducerData.indexOf(item);
        dispatch(onDeleteData(indexOfEditItem))
    }

    const renderItem = ({ item }) => {
        return (
            <>
                {authorizedUserData ?
                    <>
                        {item?.authUserEmail == authorizedUserData.email ?
                            <View style={styles.itemViewStyle}>
                                <View>
                                    {item.productName ? <Text style={styles.itemTextStyle}>{item.productName}</Text> : null}
                                    {item.productBrand ? <Text style={styles.itemTextStyle}>{item.productBrand}</Text> : null}
                                    {item.productPrice ? <Text style={styles.itemTextStyle}>{item.productPrice}</Text> : null}
                                </View>
                                <View style={styles.buttonViewStyle}>
                                    <Text style={styles.itemTextStyle} onPress={() => { onEditItem(item) }}>Edit</Text>
                                    <Text style={styles.itemTextStyle} onPress={() => { onDeleteItem(item) }}>Delete</Text>
                                </View>
                            </View>
                            :
                            null}
                    </>
                    : null}
            </>
        )
    }

    return (
        <View style={styles.viewStyle}>
            <View style={styles.userDataView}>
                <View style={styles.innerViewStyle}>
                    <Text style={styles.salutationStyle}>Welcome</Text>
                    <Text style={styles.logoutTextStyle} onPress={() => { onLogout() }}>Logout</Text>
                </View>
                {authorizedUserData ?
                    <>
                        <Text style={styles.userDataStyle}>{authorizedUserData.fullname}</Text>
                        <Text style={styles.userDataStyle}>{authorizedUserData.email}</Text>
                    </>
                    : null}
                {/* <Text style={styles.userDataStyle}>{authorizedUserData.pass}</Text> */}
                {/* <Text style={styles.userDataStyle}>{authorizedUserData.phone}</Text> */}
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <ButtonWithImage
                Title={HomeTabString.api_response}
                imageSource={{ uri: HomeTabImages.api_home_banner }}
                onPress={() => { props.navigation.navigate('ApiCall') }}
            />
            <ButtonWithImage
                Title={HomeTabString.add}
                imageSource={{ uri: HomeTabImages.add_task_home_banner }}
                onPress={() => { props.navigation.navigate('AddProduct') }}
            />
            <ButtonWithImage
                Title={HomeTabString.go_to_chat_app}
                imageSource={{ uri: HomeTabImages.chat_home_banner }}
                onPress={() => { props.navigation.navigate('TwilioChatWelcomeScreen') }}
            />
            <ButtonWithImage
                Title={HomeTabString.go_to_cart}
                imageSource={{ uri: HomeTabImages.shopping_cart_home_banner }}
                onPress={() => { props.navigation.navigate('Cart') }}
            /> 
            <Text>Upcoming Task</Text>
            <FlatList
                data={productReducerData}
                style={{ flex: 1 }}
                renderItem={renderItem}
            />
            </ScrollView>
            <Loader showLoader={showLoader}/>
        </View>
    )
}
const styles = StyleSheet.create({
    innerViewStyle: {
        left: '70%',
        alignSelf: 'center',
        flexDirection: 'row',
        width: deviceWidth / 1.8,
        // backgroundColor:'red',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    viewButtonStyle: {
        width: deviceWidth,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    logoutTextStyle: {
        fontSize: 15,
        color: 'red',
        fontWeight: 'bold',
        padding: 5,
    },
    itemViewStyle: {
        width: deviceWidth - 20,
        backgroundColor: 'rgb(0,0,50)',
        alignSelf: 'center',
        padding: 10,
        paddingHorizontal: 20,
        marginVertical: 5,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonViewStyle: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: deviceWidth * 0.2,
    },
    itemTextStyle: {
        color: 'rgb(255,255,255)',
        fontSize: 15,
    },
    viewStyle: {
        flex: 1,
        backgroundColor: 'rgb(225,245,230)',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 30,
        marginVertical: 100,
        color: 'black'
    },
    userDataStyle: {
        fontSize: 15,
        color: 'black',
        marginVertical: 5,
    },
    userDataView: {
        marginVertical: 10,
        backgroundColor: 'rgb(255,240,140)',
        width: deviceWidth - 20,
        paddingHorizontal: 30
    },
    salutationStyle: {
        fontSize: 20,
        color: 'rgb(234,100,255)',
        fontStyle: 'italic',
        alignSelf: 'center',
    },
    button: {
        marginVertical: 10,
        width: deviceWidth / 3,
    },
})
export default Home