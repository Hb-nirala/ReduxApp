import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../Screens/Home/Home';
import ApiResponse from '../../Screens/ApiCall/ApiResponse';
import Cart from '../../Screens/Cart/Cart';
import TwilioChatNavigator from './TwilioChatNavigator';
import EntertainmentNavigator from './EntertainmentNavigator';
import Entertainment from '../../Screens/Entertainment';
import Icon from 'react-native-vector-icons/Entypo';
import { Text, StyleSheet } from 'react-native';
import HomeNavigator from './HomeNavigator';
import ApiNavigator from './ApiNavigator';

const Tab = createBottomTabNavigator();

const UserNavigator = () => {


    const changeIconOnfocus = (focus, name, title) => {
        return (
            <>
                <Icon
                    size={20}
                    style={{
                        opacity:
                            focus ?
                                1
                                : 0.5,
                    }}
                    name={name}
                    color={'rgb(0, 0, 50)'}
                />
                <Text style={{
                    opacity:
                        focus ?
                            1
                            : 0.5,
                    color: 'rgb(0, 0, 50)'
                }}>{title}</Text>
            </>
        );
    };


    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}
        initialRouteName='Home'>
            <Tab.Screen name="Home" component={HomeNavigator}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return changeIconOnfocus(true, 'home', 'Home')
                        }
                        else {
                            return changeIconOnfocus(false, 'home', 'Home')
                        }
                    },
                    tabBarShowLabel: false
                }}
            />
            <Tab.Screen name="Cart" component={Cart}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return changeIconOnfocus(true, 'shopping-cart', 'Cart')
                        }
                        else {
                            return changeIconOnfocus(false, 'shopping-cart', 'Cart')
                        }
                    },
                    tabBarShowLabel: false
                }} />
            <Tab.Screen name="ApiCall" component={ApiNavigator}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return changeIconOnfocus(true, 'swap', 'Api')
                        }
                        else {
                            return changeIconOnfocus(false, 'swap', 'Api')
                        }
                    },
                    tabBarShowLabel: false
                }} />
            <Tab.Screen name="EntertainmentPage" component={EntertainmentNavigator}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return changeIconOnfocus(true, 'traffic-cone', 'Enjoy')
                        }
                        else {
                            return changeIconOnfocus(false, 'traffic-cone', 'Enjoy')
                        }
                    },
                    tabBarShowLabel: false
                }} />
            <Tab.Screen name="TwilioChatWelcomeScreen" component={TwilioChatNavigator}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return changeIconOnfocus(true, 'pencil', 'Chats')
                        }
                        else {
                            return changeIconOnfocus(false, 'pencil', 'Chats')
                        }
                    },
                    tabBarShowLabel: false
                }} />
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
iconStyle :{

}
})
export default UserNavigator