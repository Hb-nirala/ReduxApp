import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../Screens/Auth/Splash';
import AuthNavigator from './Auth';
import Login from '../Screens/Auth/Login';
import UserNavigator from './User/TabNavigator';

const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="UserNavigator" component={UserNavigator} options={{ headerShown: false }} />
                {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="SignUpForm" component={SignUp} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="AddProduct" component={AddProduct} options={{ headerShown: false }} /> */}
            </Stack.Navigator >
        </NavigationContainer>
    )
}
export default Navigator