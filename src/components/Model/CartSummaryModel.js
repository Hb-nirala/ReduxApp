import React, { useEffect } from 'react'
import { View, Text, Modal, StyleSheet, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import HeaderBoldText from '../Text/HeaderBoldText'
import { appDimension } from '../../utils/globalConstant'
import { calculateMyCartAmount } from '../../Redux/CartRedux/CartAction'
import HeaderView from '../HeaderView/HeaderView'
import ReactButton from '../Buttons/ReactButton'

const CartSummaryModel = ({ visible, closePress,onSuccessPress }) => {
    const dispatch = useDispatch()
    const { numOfItem, price } = useSelector((state) => state.cartReducer)
    // console.log("numOfItem============", numOfItem);
    // console.log("price============", price);

    useEffect(() => {
        dispatch(calculateMyCartAmount(numOfItem))
    }, [visible])

    const renderAddedItemToCart = ({ item }) => {
        // console.log('item======', item);
        return (
            <View style={styles.itemContainerStyle}>
                <View style={styles.itemInnerContainerStyle}>
                    <Text style={styles.itemTextStyle}>{item?.itemName}</Text>
                    <Text style={styles.itemTextStyle}>{item?.quantity}</Text>
                </View>
                <Text style={styles.itemTextStyle}>{`₹${item?.quantity * item?.itemPrice}`}</Text>
            </View>

        )
    }

    return (
        <Modal
            visible={visible}
            animationType="slide"
        >
            <HeaderView
                Title={'My Cart'}
                rightIconPress={closePress}
            />
            <View style={styles.modelContainerStyle}>
                <FlatList
                    data={numOfItem}
                    renderItem={renderAddedItemToCart}
                />
                {
                    price ? <HeaderBoldText>{`Total Amount :- ${price}`}</HeaderBoldText> : null
                }
                <ReactButton buttonTitle={'Done'} onPress={onSuccessPress} />
            </View>

        </Modal>
    )
}
const styles = StyleSheet.create({
    modelContainerStyle: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.05)',
    },
    itemTextStyle: {
        fontSize: 18,
        color: 'black'
    },
    itemContainerStyle: {
        flexDirection: 'row',
        padding: 5,
        marginHorizontal: 10,
        width: appDimension.deviceWidth - 20,
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderBottomColor: 'gray',
        borderStyle: 'solid',
        borderBottomWidth: 1,
    },
    itemInnerContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: (appDimension.deviceWidth / 2) - 20,
    },
    headerViewStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
})
export default CartSummaryModel