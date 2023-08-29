import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../Screens/Home';
import ApiResponse from '../../Screens/ApiResponse';
import Cart from '../../Screens/Cart'
import TwilioChatNavigator from './TwilioChatNavigator';
import EntertainmentNavigator from './EntertainmentNavigator';
import Entertainment from '../../Screens/Entertainment';

const Tab = createBottomTabNavigator();

const UserNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="ApiResponse" component={ApiResponse} />
            <Tab.Screen name="Entertainment" component={EntertainmentNavigator} />
            <Tab.Screen name="Chats" component={TwilioChatNavigator} />
        </Tab.Navigator>
    )
}

export default UserNavigator