import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AddProduct from '../../../Screens/Home/AddProduct';
import Home from '../../../Screens/Home/Home';

const Stack = createStackNavigator();
const HomeNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name='AddProduct' component={AddProduct} options={{ headerShown: false }}/>
    </Stack.Navigator >
)
}

export default HomeNavigator