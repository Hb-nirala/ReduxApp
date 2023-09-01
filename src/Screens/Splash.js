import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Splash = (props) => {

    const loginReducerData = useSelector((state) => state.Login.value.authUserData)
    // const signUpReducerData = useSelector(state => state.SignUp.value.signUpDataArray);

    useEffect(() => {
        setTimeout(() => {
            if (loginReducerData && (loginReducerData.email && loginReducerData.pass)) {
                props.navigation.navigate('UserNavigator')
            }
            else {
                props.navigation.navigate('Login')
            }
        }, 5000)
    }, [loginReducerData])

    return (
        <View style={styles.containerStyle}>
            <View style={styles.imageContainerStyle}>
                <Image
                    style={styles.imageStyle}
                    resizeMode='cover'
                    source={require('../utils/assets/Images/Splash_Image.png')}
                />
                <Text style={styles.textStyle}>Redux App</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    imageStyle: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(100,56,177)'
    },
    imageContainerStyle: {
        alignItems: 'center'
    },
    textStyle: {
        marginTop: 10,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'

    }
})
export default Splash