import { View, Text, TextInput, StyleSheet, Dimensions, Button, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductData, onEditData } from '../../../Redux/productReducer'
import Icon from 'react-native-vector-icons/AntDesign'
import { setEditItem } from '../../../Redux/editProductItemReducer'

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

const AddProduct = (props) => {

    const editProductItem = useSelector((state) => state?.EditProductItem?.value?.editItem)
    const editProductIndex = useSelector((state) => state?.EditProductItem?.value?.editItemIndex)

    const [productName, setProductName] = useState(editProductItem?.productName)
    const [productBrand, setProductBrand] = useState(editProductItem?.productBrand)
    const [productPrice, setProductPrice] = useState(editProductItem?.productPrice)

    const authorizedUserData = useSelector((state) => state.Login.value.authUserData)

    const productData = {
        authUserEmail: authorizedUserData.email,
        productName: productName,
        productBrand: productBrand,
        productPrice: productPrice,
    }

    const dispatch = useDispatch()

    const submitProductData = () => {
        dispatch(addProductData(productData))
        props.navigation.navigate('Home')
    }

    const onSubmitEditData = () => {
        dispatch(onEditData({ editProductIndex, productData }))
        dispatch(setEditItem({}, ''))
        props.navigation.navigate('Home')
    }

    return (
        <ScrollView style={styles.scrollViewStyle}>
            <Icon name='arrowleft' size={25} onPress={() => { props.navigation.navigate('Home'), dispatch(setEditItem({}, '')) }} color='black' style={{ marginLeft: 10, marginTop: 10 }} />
            <View style={styles.viewStyle}>
                {editProductItem ? <Text style={styles.textStyle}>Edit Task</Text> : <Text style={styles.textStyle}>Add Task</Text>}
                <TextInput style={styles.input}
                    placeholder="Enter Product Name"
                    onChangeText={(text) => { setProductName(text) }}
                    value={productName}
                />
                <TextInput style={styles.input}
                    placeholder="Enter Product Brand"
                    onChangeText={(text) => { setProductBrand(text) }}
                    editable={true}
                    value={productBrand}
                />
                <TextInput style={styles.input}
                    placeholder="Enter Product Price"
                    editable={true}
                    onChangeText={(text) => { setProductPrice(text) }}
                    value={productPrice}
                />
                <View style={styles.button}>
                    <Button title={editProductItem ? 'Edit Done' : 'Done'} color={'rgb(25,200,235)'} onPress={() => { editProductItem ? onSubmitEditData() : submitProductData() }} />
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    scrollViewStyle: {
        backgroundColor: 'rgb(225,245,230)',
    },
    textStyle: {
        fontSize: 30,
        marginVertical: 100,
        color: 'black'
    },
    viewStyle: {
        flex: 1,
        backgroundColor: 'rgb(225,245,230)',
        alignItems: 'center',
    },
    input: {
        backgroundColor: 'white',
        width: deviceWidth - 20,
        marginVertical: 10,
        alignSelf: 'center',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    button: {
        marginVertical: 30,
        width: deviceWidth / 2,
    },
})
export default AddProduct