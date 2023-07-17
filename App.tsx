/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import RootStack from './src/navigation/RootStack';
import {Provider} from 'react-redux';
import {store} from './src/store';

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
}

export default App;
