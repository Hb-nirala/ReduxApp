import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../../Screens/Auth/SignUp';

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="SignUpForm" component={SignUp} options={{ headerShown: false }} />
        </Stack.Navigator >
    )
}
export default AuthNavigator