import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Entertainment from '../../../Screens/Entertainment';
import YoutubeVideos from '../../../Screens/Entertainment/YoutubeVideos';
import Music from '../../../Screens/Entertainment/Music/musicIndex';
import MusicHome from '../../../Screens/Entertainment/Music/musicHome';

const Stack = createStackNavigator();

const EntertainmentNavigator = () => {
    return (
        <Stack.Navigator
        initialRouteName='EntertainmentPage'>
            <Stack.Screen name="EntertainmentPage" component={Entertainment} options={{ headerShown: false }} />
            <Stack.Screen name="YoutubeVideos" component={YoutubeVideos} options={{ headerShown: false }} />
            <Stack.Screen name="Music" component={Music} options={{ headerShown: false }} />
            <Stack.Screen name="MusicHome" component={MusicHome} options={{ headerShown: false }} />
        </Stack.Navigator >
    )
}

export default EntertainmentNavigator