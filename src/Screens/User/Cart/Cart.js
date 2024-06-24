import { View, Text, StyleSheet, Dimensions, FlatList, Image, Platform, BackHandler, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { cartItemArray } from '../../../utils/globalConstant'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, buyMyCartProduct, calculateMyCartAmount, removeItemFromCart } from '../../../Redux/CartRedux/CartAction'
import CartSummaryModel from '../../../components/Model/CartSummaryModel'
import { TabHeaderTitle } from '../../../utils/appStrings'
import HeaderBoldText from '../../../components/Text/HeaderBoldText'
import Loader from '../../../components/Loader'
import Icon from 'react-native-vector-icons/AntDesign'
import FontRegularText from '../../../components/Text/FontRegularText'
import FontExtraBoldText from '../../../components/Text/FontExtraBoldText'

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

const Cart = (props) => {
    const [shoppingSummary, setShoppingSummary] = useState(false)
    const [showLoader, setShowLoader] = useState(false)

    const dispatch = useDispatch()

    const items = useSelector((state) => state.cartReducer.numOfItem)
    const totalPrice = useSelector((state) => state.cartReducer.price)

    const updatedCartItemArray = cartItemArray.map(item => {
        const match = items.find(i => i.id === item.id);
        return {
            ...item,
            quantity: match ? match.quantity : 0
        };
    });


    useEffect(() => {
        dispatch(calculateMyCartAmount(items))
    }, [items,updatedCartItemArray])

    useEffect(() => {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', backButtonHandler)
        }
        // return () => {
        //     if (Platform.OS === 'android') {
        //         BackHandler.remove()
        //     }
        // }
        // BackHandler.exitApp()
        // return () => BackHandler.removeEventListener('hardwareBackPress', backButtonHandler)
    }, [])

    const backButtonHandler = () => {
        props.navigation.navigate('Home')
        return true
    }

    const handleBuyMyCartProduct = () => {
        setShoppingSummary(false)
        dispatch(buyMyCartProduct(items))
        setShowLoader(true)
        setTimeout(() => {
            setShowLoader(false)
            Alert.alert("", "You have buy Successfully.")
        }, 10000);
    }

    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemViewStyle}>
                <Image source={{ uri: item.itemImage }}
                    resizeMode='cover'
                    style={styles.imageStyle} />
                <View style={styles.itemInfoStyle}>
                    <Text style={styles.itemTextStyle}>{item.itemName}</Text>
                    <FontRegularText style={styles.itemTextStyle}>MRP :-  ₹{item.itemPrice}</FontRegularText>
                </View>
                <View style={styles.buttonViewStyle}>
                    <Icon
                        name={'pluscircle'} size={20}
                        color={'white'}
                        onPress={() => { dispatch(addItem(item)) }}
                        style={styles.addIconStyle}
                    />
                    {item.quantity > 0 ? <FontRegularText style={styles.itemQtyTextStyle}>{item.quantity}</FontRegularText> : null}
                    {item.quantity > 0 ? <Icon
                        onPress={() => { dispatch(removeItemFromCart(item)) }}
                        name={'minuscircle'}
                        size={20}
                        color={'white'}
                        style={styles.addIconStyle}
                    /> : null}
                </View>
            </View>
        )
    }
    return (
        <View style={styles.viewStyle}>
            <HeaderBoldText>{TabHeaderTitle.cart}</HeaderBoldText>
            <FlatList
                data={updatedCartItemArray}
                style={{ flex: 1 }}
                renderItem={renderItem}
            />
            {items.length > 0 ?
                <View style={styles.byuTabStyle}>
                    <View style={styles.cartItemViewStyle}>
                        <Text style={styles.cartitemTextStyle}>{`Total Items(${items.length})`}</Text>
                        <Text style={styles.cartitemTextStyle}>{`Total Amount ₹${totalPrice}`}</Text>
                    </View>
                    <TouchableOpacity style={styles.buyButtonViewStyle} onPress={() => { setShoppingSummary(true) }}>
                        <Text style={styles.buyButtonTextStyle}>Buy</Text>
                    </TouchableOpacity>
                </View>
                :
                null}
            <CartSummaryModel
                visible={shoppingSummary}
                closePress={() => setShoppingSummary(false)}
                onSuccessPress={() => { handleBuyMyCartProduct() }} />
            <Loader showLoader={showLoader} />
        </View>
    )
}
const styles = StyleSheet.create({
    headerViewStyle: {
        flexDirection: 'row',
        width: deviceWidth * 0.55,
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'flex-start'
    },
    salutationStyle: {
        fontSize: 20,
        color: 'rgb(234,100,255)',
        fontStyle: 'italic',
        alignSelf: 'center',
    },
    viewStyle: {
        flex: 1,
        backgroundColor: 'rgb(225,245,230)',
        alignItems: 'center',
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
    itemTextStyle: {
        color: 'rgb(255,255,255)',
        fontSize: 15,
        textAlign:'left'
    },
    imageStyle: {
        width: 70,
        height: 70,
        borderRadius: 10,
    },
    itemInfoStyle: {
        width: deviceWidth / 2,
        justifyContent: 'center'
    },
    buttonViewStyle: {
        alignSelf: 'center',
    },
    buyButtonViewStyle: {
        alignItems: 'center',
        width: deviceWidth * 0.4,
        backgroundColor: 'green',
        paddingVertical: 2,
        borderRadius: 10,
    },
    byuTabStyle: {
        backgroundColor: 'white',
        width: deviceWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    cartItemViewStyle: {
        backgroundColor: 'rgb(255,80,0)',
        width: deviceWidth * 0.4,
        alignItems: 'center',
        paddingVertical: 2,
        borderRadius: 10,
    },
    cartitemTextStyle: {
        color: 'rgb(255,255,255)',
        fontSize: 12,
    },
    itemQtyTextStyle: {
        color: 'rgb(255,255,255)',
        fontSize: 12,
        paddingTop:4,
    },
    addIconStyle:{
        padding:1,
    },
    buyButtonTextStyle:{
        fontSize: 25,
        color:'rgb(255,255,255)',
    }
})
export default Cart