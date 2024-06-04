import { View, Text, Modal, StyleSheet, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import ReactButton from '../Buttons/ReactButton'
import { useSelector } from 'react-redux'
import HeaderBoldText from '../Text/HeaderBoldText'
import { appDimension } from '../../utils/globalConstant'
import { calculateMyCartAmount } from '../../Redux/CartRedux/CartAction'

const CartSummaryModel = ({ visible, closePress }) => {
    const items = useSelector((state) => state.cartReducer.numOfItem)
    console.log("items==", items);

    // const itemDetails = () =>{
    //     items.forEach(element => {
    //         if(element.id == element.id)

    //     });
    // }

    useEffect(()=>{
        calculateMyCartAmount(items)
    },[])

    const renderAddedItemToCart = ({ item }) => {
        console.log('item======', item);
        return (
            <View style={styles.itemContainerStyle}>
                <Text style={styles.itemTextStyle}>{item?.itemName}</Text>
                <Text style={styles.itemTextStyle}>{item?.itemPrice}</Text>
            </View>

        )
    }

    return (
        <Modal
            visible={visible}
        >
            <HeaderBoldText>{"My Cart"}</HeaderBoldText>
            <View style={styles.modelContainerStyle}>
                <FlatList
                    data={items}
                    renderItem={renderAddedItemToCart}
                />
                <ReactButton buttonTitle={'Done'} onPress={closePress} />
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
    }
})
export default CartSummaryModel