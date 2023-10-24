import { View, Text, StyleSheet, Dimensions, FlatList, Image, Platform, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import { cartItemArray } from '../../utils/globalConstant'
import Icon from 'react-native-vector-icons/AntDesign'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../Redux/CartRedux/CartAction'
import CartSummaryModel from '../../components/Model/CartSummaryModel'
import { TabHeaderTitle } from '../../utils/appStrings'
import HeaderBoldText from '../../components/Text/HeaderBoldText'

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

const Cart = (props) => {
    const [shoppingSummary, setShoppingSummary] = useState(false)

    const dispatch = useDispatch()

    const items = useSelector((state) => state.cartReducer.numOfItem)


    const calculateTotalPrice = () => {
        // let priceArray = []
        let totalPrice = 0
        items.forEach(element => {
            totalPrice = totalPrice + element.itemPrice
            // console.log("price", element.itemPrice);
            // priceArray.push(element.itemPrice)
        });
        console.log("priceArray", totalPrice);
        return totalPrice
    }

    useEffect(() => {
        calculateTotalPrice()
    }, [items])

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

    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemViewStyle}>
                <Image source={{ uri: item.itemImage }}
                    resizeMode='cover'
                    style={styles.imageStyle} />
                <View style={styles.itemInfoStyle}>
                    <Text style={styles.itemTextStyle}>{item.itemName}</Text>
                    <Text style={styles.itemTextStyle}>MRP :-  ₹{item.itemPrice}</Text>
                </View>
                <View style={styles.buttonViewStyle}>
                    <Text style={styles.itemTextStyle} onPress={() => { dispatch(addItem(item)) }}>Add</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.viewStyle}>
            <HeaderBoldText>{TabHeaderTitle.cart}</HeaderBoldText>
            <FlatList
                data={cartItemArray}
                style={{ flex: 1 }}
                renderItem={renderItem}
            />
            {items.length > 0 ?
                <View style={styles.byuTabStyle}>
                    <View style={styles.cartItemViewStyle}>
                        <Text style={styles.cartitemTextStyle}>{`Total Quantity(${items.length})`}</Text>
                        <Text style={styles.cartitemTextStyle}>{`Total Amount ₹${calculateTotalPrice()}`}</Text>
                    </View>
                    <View style={styles.buyButtonViewStyle}>
                        <Text style={styles.itemTextStyle} onPress={() => { shoppingSummary ? null : setShoppingSummary(true) }}>Buy</Text>
                    </View>
                </View>
                :
                null}
            <CartSummaryModel
                visible={shoppingSummary}
                closePress={() => setShoppingSummary(false)} />
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
        fontSize: 25,
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
        // alignItems: 'center',
        // justifyContent: 'space-between',
        // flexDirection: 'row',
        // width: deviceWidth * 0.2,
    },
    buyButtonViewStyle: {
        // alignSelf: 'center',
        alignItems: 'center',
        // justifyContent: 'space-between',
        // flexDirection: 'row',
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
    }
})
export default Cart