import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../Screens/Home';
import AddProduct from '../../Screens/AddProduct';
import ApiResponse from '../../Screens/ApiResponse';
import ApiCall from '../../Screens/ApiCall/ApiCall';
import ThunkResponseData from '../../Screens/ApiCall/ThunkResponseData';
import ThunkPostData from '../../Screens/ApiCall/ThunkPostData';


const Stack = createStackNavigator();

const UserNavigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="AddProduct" component={AddProduct} options={{ headerShown: false }} />
            <Stack.Screen name="ApiResponse" component={ApiResponse} options={{ headerShown: false }} />
            <Stack.Screen name="ApiCall" component={ApiCall} options={{ headerShown: false }} />
            <Stack.Screen name="ThunkResponseData" component={ThunkResponseData} options={{ headerShown: false }} />
            <Stack.Screen name="ThunkPostData" component={ThunkPostData} options={{ headerShown: false }} />
        </Stack.Navigator >
    )
}
export default UserNavigator