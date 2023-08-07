import * as React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { persistor, store } from './Redux/store';
import Navigator from './Navigator';
import NewsScreen from './Screens/ApiCall/ThunkResponseData';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NewsScreen />
      </PersistGate>
    </Provider>
  );
}

export default App;