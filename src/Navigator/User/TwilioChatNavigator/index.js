import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen } from '../../../Screens/User/TwilioChat/Welcome';
import { ChatListScreen } from '../../../Screens/User/TwilioChat/chatListScreen';
import { ChatCreateScreen } from '../../../Screens/User/TwilioChat/chatCreateScreen';
import { ChatRoomScreen } from '../../../Screens/User/TwilioChat/chatRoomScreen';
import AddParticipants from '../../../Screens/User/TwilioChat/addParticipants';

const Stack = createStackNavigator();

const TwilioChatNavigator = () => {
    return (
        <Stack.Navigator 
        initialRouteName='TwilioChatWelcomeScreen'>
            <Stack.Screen name="TwilioChatWelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="TwilioChatListScreen" component={ChatListScreen} options={{ headerShown: false }} />
            <Stack.Screen name="TwilioChatCreateScreen" component={ChatCreateScreen} options={{ headerShown: false }} />
            <Stack.Screen name="TwilioChatRoomScreen" component={ChatRoomScreen} options={{ headerShown: false }} />
            <Stack.Screen name="TwilioParticipantScreen" component={AddParticipants} options={{ headerShown: false }} />
        </Stack.Navigator >
    )
}

export default TwilioChatNavigator