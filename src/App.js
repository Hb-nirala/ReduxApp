import * as React from 'react';
import TwilioChatNavigator from './Navigator/User/TwilioChatNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from './TwilioChat/AppContext';
import FlashMessage from 'react-native-flash-message';


const App = () => {
  return (

    <NavigationContainer>
      <AppProvider>
        <TwilioChatNavigator />
        <FlashMessage position="bottom" />
      </AppProvider>
    </NavigationContainer>

  );
}

export default App;