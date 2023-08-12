import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen } from '../../../TwilioChat/Screens/Welcome';
import { ChatListScreen } from '../../../TwilioChat/Screens/chatListScreen';
import { ChatCreateScreen } from '../../../TwilioChat/Screens/chatCreateScreen';
import { ChatRoomScreen } from '../../../TwilioChat/Screens/chatRoomScreen';

const Stack = createStackNavigator();

const TwilioChatNavigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="TwilioChatWelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="TwilioChatListScreen" component={ChatListScreen} options={{ headerShown: false }} />
            <Stack.Screen name="TwilioChatCreateScreen" component={ChatCreateScreen} options={{ headerShown: false }} />
            <Stack.Screen name="TwilioChatRoomScreen" component={ChatRoomScreen} options={{ headerShown: false }} />
        </Stack.Navigator >
    )
}

export default TwilioChatNavigator