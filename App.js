/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import MyApp from './src/navigation/index';
import { store } from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <StatusBar hidden={false} />
        <MyApp />
      </View>
    </Provider>
  );
};
export default App;