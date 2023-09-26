import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ApiCall from '../../../Screens/ApiCall/ApiCall';
import ApiResponse from '../../../Screens/ApiCall/ApiResponse';
import ThunkPostData from '../../../Screens/ApiCall/ThunkPostData';
import ThunkResponseData from '../../../Screens/ApiCall/ThunkResponseData';

const Stack = createStackNavigator();
const ApiNavigator = () => {
  return (
      <Stack.Navigator>
          <Stack.Screen name='ApiCall' component={ApiCall} options={{ headerShown: false }}/>
          <Stack.Screen name='ApiResponse' component={ApiResponse} options={{ headerShown: false }}/>
          <Stack.Screen name='ThunkPostData' component={ThunkPostData} options={{ headerShown: false }}/>
          <Stack.Screen name='ThunkResponseData' component={ThunkResponseData} options={{ headerShown: false }}/>
      </Stack.Navigator >
  )
}

export default ApiNavigator