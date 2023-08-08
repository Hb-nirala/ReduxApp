import * as React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { persistor, store } from './Redux/store';
import ThunkResponseData from './Screens/ApiCall/ThunkResponseData';
import Navigator from './Navigator';


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
}

export default App;