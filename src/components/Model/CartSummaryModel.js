import { View, Text, Modal, StyleSheet } from 'react-native'
import React from 'react'
import ReactButton from '../Buttons/ReactButton'
import { useSelector } from 'react-redux'

const CartSummaryModel = ({ visible, closePress }) => {
    const items = useSelector((state) => state.cartReducer.numOfItem)
    console.log("items==", items);

    // const itemDetails = () =>{
    //     items.forEach(element => {
    //         if(element.id == element.id)

    //     });
    // }

    return (
        <Modal
            visible={visible}
        >
            <View style={styles.modelContainerStyle}>
                <ReactButton buttonTitle={'Done'} onPress={closePress} />
            </View>

        </Modal>
    )
}
const styles = StyleSheet.create({
    modelContainerStyle: {
        alignItems:'center',
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.05)',
    }
})
export default CartSummaryModel