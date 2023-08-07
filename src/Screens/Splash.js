import { View, Text } from 'react-native'
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
        }, 2000)
    }, [loginReducerData])

    return (
        <View>
            <Text>Splash</Text>
        </View>
    )
}

export default Splash