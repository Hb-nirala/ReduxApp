import * as React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { persistor, store } from './Redux/store';
import ThunkResponseData from './Screens/ApiCall/ThunkResponseData';
import Navigator from './Navigator';
import TwilioChatNavigator from './Navigator/User/TwilioChatNavigator';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  return (

    <NavigationContainer>
      <TwilioChatNavigator />
    </NavigationContainer>

  );
}

export default App;