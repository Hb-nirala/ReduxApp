import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../../Screens/User/Home/Home';
import AddProduct from '../../../Screens/User/Home/AddProduct';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Stack.Screen name='AddProduct' component={AddProduct} options={{ headerShown: false }} />
    </Stack.Navigator >
  )
}

export default HomeNavigator